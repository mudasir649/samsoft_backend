import Services from "../models/Services.js";
import { successResponse, failedResponse } from "../utils/response.js";

const getServices = async(req, res) => {
    try {
        const service = await Services.find();
        return successResponse(
            res,
            "All services retrieved sucessfully.",
            true,
            service
        )
    } catch {
        return failedResponse(res, "Unable to retrieve service! Something went wrong.",false);
    }
    
}


const getServiceById = async(req, res) => {
    const { id } = req.params;
    try {
        const service = await Services.find({_id: id});
        return successResponse(
            res,
            "Specific service is retrieved successfully.",
            true,
            service
            )
    } catch (error) {
        return failedResponse(res, "Unable to retrieve service",false);
    }
}


const createServices = async(req, res) => {
    const { package_name, image, price, description } = req.body;
    console.log(req.body);
    if(!package_name  || !image  || !price  || !description ){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            const service = await Services.create(req.body);
            return successResponse(res,
                "services is created successfully.",
                true,
                service
                )
        } catch {
            return failedResponse(res, "Unable to create service! Something went wrong.",false);
        }
    }

}


const updateServices = async(req, res) => {
    const { id } = req.params
    const { package_name, image, price, description } = req.body;
    if(!package_name  || !image  || !price  || !description || !id){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            const service = await Services.findByIdAndUpdate({_id: id}, {
                package_name: package_name,
                image: image,
                price: price,
                description: description
            })
            return successResponse(res,
                "services is updated successfully.",
                true,
                service
                )
        } catch {
            return failedResponse(res, "Unable to update service! Something went wrong.",false);
        }
    }
}


const deleteServices = async(req, res) => {
    const { id } = req.params;
    try {
            const service = await Services.findByIdAndDelete({_id: id})
            return successResponse(
                res,
                "Service is deleted successfully.",
                true,
                service
            )
    } catch (error) {
        return failedResponse(res, "Unable to delete service! Something went wrong.",false);
    }
}


export {
    getServices,
    getServiceById,
    createServices,
    updateServices,
    deleteServices,
}