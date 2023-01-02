require('dotenv').config()

const connectDB = require("./db/connect")
const product = require("./models/product")

const jsonProducts = require("./products.json")

const start = async () => {
    try {
        console.log('populating product table in 04-STORE-API database... \nNo. of products:', jsonProducts.length)
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany()
        await product.create(jsonProducts)
        process.exit(0)
    } catch (error) {
        console.log("ERROR: populating product table in 04-STORE-API database", error);
        process.exit(1)
    }
}

start()