# Merge Assignment

## Overview
simple API with basic crud operations

## Getting Started
1. Clone the repository
2. cd into the directory
3. run `npm install`
4. create a .env file from the .env.example and replace the values with your own
5. run `npm run dev` to start the server
6. try out the endpoints with postman or any other API testing tool

## Endpoints
1. GET / - returns a welcome message
2. GET /api/getItems - returns all items in the database
3. POST /api/addItem - adds an item to the database
4. GET /api/getCarts - returns all carts in the database
5. GET /api/getCart/:id - returns a cart with the specified id
6. POST /api/addItemsToCart - adds a cart to the database and populates it with the items specified in the request body
7. POST /api/addItemsToCart/:id - adds an item to a cart with the specified id
8. POST /api/removeItemsFromCart/:id - removes an item from a cart with the specified id

```