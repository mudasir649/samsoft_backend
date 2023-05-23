import Package from "../models/Package.js";
import { successResponse, failedResponse } from "../utils/response.js";

const getPackage = async(req, res) => {
    try {
        const service = await Package.find();
        return successResponse(
            res,
            "All Packages retrieved sucessfully.",
            true,
            service
        )
    } catch {
        return failedResponse(res, "Unable to retrieve! Something went wrong.",false);
    }
    
}


const createPackage = async(req, res) => {
    const { package_name, image, price, description, serviceId } = req.body;
    if(!package_name  || !image  || !price  || !description ){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            const service = await Package.create({package_name, image, price, description, serviceId});
            return successResponse(res,
                "Package is created successfully.",
                true,
                service
                )
        } catch {
            return failedResponse(res, "Unable to create package! Something went wrong.",false);
        }
    }

}


const updatePackage = async(req, res) => {
    const { package_name, image, price, description, serviceId } = req.body;
    if(!package_name  || !image  || !price  || !description || !serviceId ){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            const service = await Package.updateOne({
                package_name: package_name,
                image: image,
                price: price,
                description: description
            })
            return successResponse(res,
                "Package is updated successfully.",
                true,
                service
                )
        } catch {
            return failedResponse(res, "Unable to update package! Something went wrong.",false);
        }
    }
}


const deletePackage = async(req, res) => {
    const { id } = req.params;
    try {
        const serviceExist = await Package.find({ _id: id })
        if(serviceExist){
            const service = await Package.deleteOne({ _id: id });
            return successResponse(
                res,
                "Package is deleted successfully.",
                true,
                service
            )
        }
    } catch (error) {
        return failedResponse(res, "Unable to delete package! Something went wrong.",false);
    }
}




export {
    getPackage,
    createPackage,
    updatePackage,
    deletePackage,
}