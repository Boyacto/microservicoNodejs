import express from "express";
export const router = express.Router();
const swaggerDocument = require('./swagger.json'); 
const swaggerUi = require("swagger-ui-express");
import { service } from './services'; 

router.use(express.json());
//Es indispensable para poder utilizar swagger
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

router.post('/email', service.trigger);
router.get('/email/:email', service.getEmails);  
router.get('/status', service.status);

