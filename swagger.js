const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

const options = {
  apis: ['./src/routes/auth.routes.js', 'src/models/users.js'],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'chat with nodejs',
      version: '0.0.9',
      description: 'API for chat app',
    },
  },
};

//specification json for our documentation

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  //generate the route to show the documentation
  app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get('/api/v1/docs.json', (req, res) => {
    res.setHeader({ 'Content-Type': 'application/json' });
    res.send(swaggerSpec);
  });

  console.log(
    `Swagger docs available at ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
