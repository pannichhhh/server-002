const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Employee API",
        version: "1.0.0",
        description: "API ตัวอย่างสำหรับ Employee Profile ",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Development server",
        },
      ],
      components: {
        schemas: {
          Employee: {
            type: "object",
            required: [
              "id",
              "name",
              "age",
            ],
            properties: {
              id: {
                type: "Integer",
                description: "The auto-generated id of the Employee",
              },
              name: { type: "String", description: "The Employee Name" },
              age: { type: "Number", description: "The Employee Age" },
            },
          },
        },
      },
    },
    apis: ["./routes/emp.js"],
    //apis: ['./controllers/controlemp.js'],
  }

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };