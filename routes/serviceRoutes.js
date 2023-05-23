import express from "express";
import { getServices, getServiceById,createServices, updateServices, deleteServices } from "../controllers/ServicesController.js";

const router = express.Router();

//route to get all services
router.get('/', getServices);
router.get('/specificservice/:id', getServiceById);
//route to create services
router.post('/createservice', createServices);
//route to update services
router.post('/updateservice/:id', updateServices);
//route to delete services
router.delete('/deleteservice/:id', deleteServices);


export default router;
