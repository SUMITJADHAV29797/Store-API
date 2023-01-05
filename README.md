# Store-API - 

This is an example of store API backend application

## Live Website Link - 



### Install - 

````
git clone https://github.com/SUMITJADHAV29797/Store-API.git
````
````
cd /store-API
````

### Run the App - 

````
npm start
````

### API -

##### /api/v1/products - 

Get request : Get all the products in the store

Example :
````
http://localhost:3000/ap/v1/products
````
Sample Response:
````
{
    "products": [
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb17b",
            "name": "modern poster",
            "price": 30,
            "company": "liddy",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb17c",
            "name": "shelf",
            "price": 30,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb17f",
            "name": "suede armchair",
            "price": 15,
            "company": "caressa",
            "__v": 0
        },
        {
            "featured": true,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb181",
            "name": "vase table",
            "price": 120,
            "company": "marcos",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb182",
            "name": "wooden bed",
            "price": 25,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb183",
            "name": "wooden desk",
            "price": 15,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb184",
            "name": "wooden desk",
            "price": 40,
            "company": "ikea",
            "__v": 0
        },
        {
            "featured": true,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb185",
            "name": "wooden table",
            "price": 23,
            "company": "caressa",
            "__v": 0
        }
    ],
    "nbHits": 8
}
````
##### /api/v1/products/static - 
 
Get request : it gets the products according to the filters applied

Example:
````
http://localhost:3000/ap/v1/products/static
````

Sample Response :
````
{
    "products": [
        {
            "_id": "63aac294e0d4501e85afb17f",
            "name": "suede armchair",
            "price": 15
        },
        {
            "_id": "63aac294e0d4501e85afb183",
            "name": "wooden desk",
            "price": 15
        },
        {
            "_id": "63aac294e0d4501e85afb185",
            "name": "wooden table",
            "price": 23
        },
        {
            "_id": "63aac294e0d4501e85afb182",
            "name": "wooden bed",
            "price": 25
        },
        {
            "_id": "63aac294e0d4501e85afb17b",
            "name": "modern poster",
            "price": 30
        },
        {
            "_id": "63aac294e0d4501e85afb17c",
            "name": "shelf",
            "price": 30
        },
        {
            "_id": "63aac294e0d4501e85afb184",
            "name": "wooden desk",
            "price": 40
        },
        {
            "_id": "63aac294e0d4501e85afb181",
            "name": "vase table",
            "price": 120
        }
    ],
    "nbHits": 8
}
````

##### E.g. - /api/v1/products?name=wooden bed&company=ikea

Sample Response:
````
{
    "products": [
        {
            "featured": false,
            "rating": 4.5,
            "createdAt": "2022-12-27T10:01:56.482Z",
            "_id": "63aac294e0d4501e85afb182",
            "name": "wooden bed",
            "price": 25,
            "company": "ikea",
            "__v": 0
        }
    ],
    "nbHits": 1
}
````