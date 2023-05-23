import express from "express";
import { getPackage, createPackage, updatePackage, deletePackage } from "../controllers/PackageController.js";

const router = express.Router();

//route to get all package
router.get('/', getPackage);
//route to create package
router.post('/createpackage', createPackage);
//route to update package
router.post('/updatepackage', updatePackage);
//route to delete package
router.delete('/deletepackage/:id', deletePackage);


export default router;
