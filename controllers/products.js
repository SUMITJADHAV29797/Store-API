const product = require("../models/product")


const getAllProductsStatic = async(req, res) => {
    const products = await product.find({price: {$gt: 1}})
    .select("name price")
    .sort("price")
    .limit(30)
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async(req, res) => {
    const {featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: "i"}
    }
    if (numericFilters) {
        const operatorMap = {
            ">" : "$gt",
            ">=" : "$gte",
            "=" : "$eq",
            "<" : "$lt",
            "<=" : "$lte", 
        
        }
        console.log("fsdc");
        const regEx = /\b(<|>|>=|=|<=)\b/g
        console.log("fsdsqs");
        let filters = numericFilters.replace(regEx, (match) =>`-${operatorMap [match]}-`)
        console.log(filters);
        const options = ['price', 'rating']
        filters=filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('_')
            if (options.includes (field)) {
            queryObject [field] = { [operator]: Number(value) }}
        })
    }
    let result = product.find(queryObject);
    if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList)
        console.log("res in if sort", result)
    }  else {
        result = result.sort("createdAt")
    }
    if (fields) {
        const fieldsList = fields.split(",").join(" ");
        result = result.select(fieldsList)
    }
    const page = Number(req.body.page) || 1
    const limit = Number(req.body.limit) || 50
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)
    
    const products = await result
    res.status(200).json({products, nbHits: products.length })
    
    // res.status(200).json({msg: "no products found"})
}

    
 

module.exports = {
    getAllProducts, 
    getAllProductsStatic
}
