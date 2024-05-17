const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

const products = []

app.post('/products', (req, res) => {
    products.push(req.body)
    res.json(products);
});

app.get('/products',(req,res) => {
    products.push(req.bpdy)
    res.json(products);
});

app.get('/products/:id',(req,res) => {
    const id = Number(req.params.id);
    const products = products.find(s => s.id === id);
    res.json(products);

})

app.put('/products/:id',(req,res) => {
    const id = Number(req.params.id)
    
})

app.listen(3000, () => console.log('Sever Ready Server'))