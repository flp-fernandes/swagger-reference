const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 5000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Felipao'
      },
      servers: [ 'http://localhost:5000']
    }
  },
  apis: [ 'app.js' ]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /customers:
 *  get:
 *    description: use to request all customers
 *    responses:
 *      '200':
 *        description: a successful response
 */
app.get('/customers', (req, res) => {
  res.send('Customer results');
});

/**
 * @swagger
 * /:
 *  get:
 *    description: test
 *    responses:
 *      '200':
 *        description: a successful response to test
 */
app.get('/', (req, res) => {
  res.send('It is alive!!!!');
})

app.listen(PORT);
