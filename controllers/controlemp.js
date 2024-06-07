const db = require('../db');
//const { swaggerspec, swaggerUi} = require('../swagger');
const express = require('express');

const app = express();

//app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerspec));
/*
/**
 * @swagger
 * /products:
 * get:
 * summary: Get all products
 * description: Get all products
 * responses:
 * 200:
 * description: A list of products
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 * 500:
 * description: Some error happened
 */

// Get all Employee
exports.getAllEmp = async (req, res) => {
    const sql = `SELECT * FROM emp`
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving Employee.', error: err });
            console.log("FAIL REQUEST API : GET /emp");
            console.log(err);
        } else {
            res.status(200).json(result);
            console.log("REQUEST API : GET /emp");
            console.log(result);
        }
    });
};

/*

/**
 * @swagger
 * /products/{id}:
 *  get:
 *     summary: Get a product by id
 *    description: Get a product by id
 *   parameters:
 *    - in: path
 *    name: id
 *   schema:
 *   type: integer
 *  required: true
 * description: Numeric ID of the product to get
 * responses:
 * 200:
 * description: A product object
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Product'
 * 404:
 * description: The product was not found
 * 500:
 * description: Some error happened
 * components:
 * schemas:
 * Product:
 * type: object
 * required:
 * - id
 * - name
 * - price
 * - discount
 * - review_count
 * - image_url
 * properties:
 * id:
 * type: integer
 * description: The auto-generated id of the product
 * name:
 * type: string
 * description: The product name
 * price:
 * type: number
 * description: The product price
 * discount:
 * type: number
 * description: The product discount
 * review_count:
 * type: integer
 * description: The product review count
 * image_url:
 * type: string
 * description: The product image URL
 
exports.getProductById = async (req, res) => {
    const id = Number(req.params.id);
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving product.', error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'Product not found.' });
            } else {
                res.status(200).json({ message: 'Product retrieved successfully.', data: result });
            }
        }
    });
};

*/


/*
exports.insertProduct = async (req, res) => {
    const product = req.body;
    const sql = 'INSERT INTO products (name, price, discount, review_count, image_url) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [product.name, product.price, product.discount, product.review_count, product.image_url], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while inserting product.', error: err });
        } else {
            res.status(201).json({ message: 'Product inserted successfully.' });
        }
    });
};

exports.updateProduct = async (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;
    const sql = 'UPDATE products SET name = ?, price = ?, discount = ?, review_count = ?, image_url = ? WHERE id = ?';
    db.query(sql, [product.name, product.price, product.discount, product.review_count, product.image_url, id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while updating product.', error: err });
        } else {
            res.status(200).json({ message: 'Product updated successfully.' });
        }
    });
};

exports.deleteProduct = async (req, res) => {
    const id = Number(req.params.id);
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while deleting product.', error: err });
        } else {
            res.status(200).json({ message: 'Product deleted successfully.' });
        }
    });
};

exports.searchProducts = async (req, res) => {
    const keyword = req.params.keyword;
    const sql = 'SELECT * FROM products WHERE name LIKE ?';
    db.query(sql, [`%${keyword}%`], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving products.', error: err });
        } else {
            res.status(200).json(result);
        }
    });
};

*/