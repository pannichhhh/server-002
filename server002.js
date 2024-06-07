const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const EmpRouter = require('./routes/emp');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/emp', EmpRouter)


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/api/emp`);
});


/*

//search products
app.get('/emp/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    const sql = 'SELECT * FROM emp WHERE name LIKE ?';
    db.query(sql, [`%${keyword}%`], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving products.', error: err });
        } else {
            res.status(200).json(result);
            console.log("REQUEST API : GET /emp/keyword");
        }
    });
});

// Create product
app.post('/emp', (req, res) => {
    const emp = req.body;
    const sql = 'INSERT INTO emp (name, age) VALUES (?, ?)';
    db.query(sql, [emp.name, emp.age], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while inserting Employee.', error: err });
        } else {
            res.status(201).json({ message: 'Employee inserted successfully.' });
        }
    });
});

*/

/*
app.put('/products/:id', (req, res) => {
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
});

app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while deleting product.', error: err });
        } else {
            res.status(200).json({ message: 'Product deleted successfully.' });
        }
    });
});

*/

