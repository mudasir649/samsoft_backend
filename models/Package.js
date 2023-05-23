import mongoose from "mongoose";


const PackageSchema = new mongoose.Schema({
    package_name: {
        type: String,
        require: [true, "Package name is required."]
    },
    image: {
        type: String,
        require: [true, "Image is required."]
    },
    price: {
        type: Number,
        require: [true, "price is required."]
    },
    description: {
        type: String,
        require: [true, "Description is required."]
    },
    serviceId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref:"services"
    }
});

const Package = mongoose.models.Package || mongoose.model('Package', PackageSchema);

export default Package;