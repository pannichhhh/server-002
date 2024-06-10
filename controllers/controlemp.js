const db = require('../db');
//const { swaggerSpec, swaggerUi} = require('../swagger');
const express = require('express');

const app = express();
//app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

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

exports.getEmpbyId = async (req, res) => {
    const id = Number(req.params.id);
    const sql = 'SELECT * FROM emp WHERE idEmp = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving Employee.', error: err });
            console.log("FAIL REQUEST API : GET /emp/id");
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'Employee ID is not found.' });
            } else {
                res.status(200).json( result );
                console.log("REQUEST API : GET /emp/id");
            }
        }
    });
};

// Create Insert Employee
exports.insertEmp = async (req, res) => {
    const emp = req.body;
    const sql = 'INSERT INTO emp (name, age) VALUES (?, ?)';
    db.query(sql, [emp.name, emp.age], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while inserting Employee.', error: err });
            console.log("FAIL REQUEST INSERT API : POST /emp");
        } else {
            res.status(201).json({ message: 'Employee inserted successfully.' });
            console.log("REQUEST INSERT API : POST /emp");
        }
    });
};


/*

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