import express from "express";
import { getPackage, getPackageById, createPackage, updatePackage, deletePackage } from "../controllers/PackageController.js";

const router = express.Router();

//route to get all package
router.get('/', getPackage);
//route to get specific package
router.get('/specificpackage/:id', getPackageById)
//route to create package
router.post('/createpackage', createPackage);
//route to update package
router.post('/updatepackage/:id', updatePackage);
//route to delete package
router.delete('/deletepackage/:id', deletePackage);


export default router;
