const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

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
    const id = Number(req.params.id);
    const products = req.body;
    const index = products.findIndex(s => s.id === id);
    res.json(products);

})

app.delete('/products/:id', () => {
    const id = Number(req.params.id)
    const index = products.findIndex(s => s.id === id);
    products.splice(index,1);
    res.json(products);
})

app.listen(port, () => {
    console.log(`Server Listen ${port}`)
} )