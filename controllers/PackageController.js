import Package from "../models/Package.js";
import Services from "../models/Services.js";
import { successResponse, failedResponse } from "../utils/response.js";

const getPackage = async(req, res) => {
    try {
        const pack = await Package.find();
        return successResponse(
            res,
            "All Packages retrieved sucessfully.",
            true,
            pack
        )
    } catch {
        return failedResponse(res, "Unable to retrieve! Something went wrong.",false);
    }   
}

const getPackageById = async(req, res) => {
    const { id } = req.params;
    try {
        const pack = await Package.find({_id: id});
        return successResponse(
            res,
            "Specific package is retrieved successfully.",
            true,
            pack
            )
    } catch (error) {
        return failedResponse(res, "Unable to retrieve package",false);
    }
}


const createPackage = async(req, res) => {
    const { package_name, image, price, description, serviceId } = req.body;
    if(!package_name  || !image  || !price  || !description ){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            const pack = await Package.create({package_name, image, price, description, serviceId});
            return successResponse(res,
                "Package is created successfully.",
                true,
                pack
                )
        } catch {
            return failedResponse(res, "Unable to create package! Something went wrong.",false);
        }
    }

}


const updatePackage = async(req, res) => {
    const { id } = req.params;
    const { package_name, image, price, description, serviceId } = req.body;
    // console.log(req.body);
    // console.log(id);
    if(!package_name  || !image  || !price  || !description || !serviceId ){
        return failedResponse(res, "Please! enter all input fields.",false);
    }else{
        try {
            console.log(image);
            const pack = await Package.findByIdAndUpdate({_id: id},
                {
                package_name: package_name,
                image: image,
                price: price,
                description: description,
                serviceId: serviceId
            })
            return successResponse(res,
                "Package is updated successfully.",
                true,
                pack
                )
        } catch(error) {
            // console.log(error);
            return failedResponse(res, "Unable to update package! Something went wrong.",false);
        }
    }
}


const deletePackage = async(req, res) => {
    const { id } = req.params;
    try {
        const packageExist = await Package.find({ _id: id })
        if(packageExist){
            const pack = await Package.deleteOne({ _id: id });
            return successResponse(
                res,
                "Package is deleted successfully.",
                true,
                pack
            )
        }
    } catch (error) {
        return failedResponse(res, "Unable to delete package! Something went wrong.",false);
    }
}




export {
    getPackage,
    getPackageById,
    createPackage,
    updatePackage,
    deletePackage,
}