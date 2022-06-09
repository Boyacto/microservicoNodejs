import express from "express";
export const router = express.Router();

const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");
  import { service } from './services'; 

  router.use(express.json());
  //Es indispensable para poder utilizar swagger
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

  router.get('/users', service.getUsers);
  router.get('/users/:id', service.getUserById);  

  router.post('/users', service.postUser);  

  router.delete('/users/:id', service.deleteUser);  

  router.get('/status', function (req, res) {
    res.status(200).send('Ok')
  });
