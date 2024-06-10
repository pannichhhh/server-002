const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 4000;


app.use(bodyParser.json());
app.use(cors());


const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Employee API',
            version: '1.0.0',
            description: 'API ตัวอย่างสำหรับ Employee Profile ',
        },
        servers: [
            {
                url: 'http://localhost:4000',
                description: 'Development server',
            },
        ],
    },
    //apis: ['./server002.js'], 
    apis: ['xx.js'], 
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * /api/emp:
 *  get:
 *      summary: Get all Employee
 *      description: Get all Employee
 *      responses:
 *          200:
 *             description: A list of Employee
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Employee'
 * 500:
 * description: Some error happened
 */
app.get('/api/emp', (req, res) => {
    res.status(200);
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/api/emp`);
});