import mongoose from "mongoose";


const ServicesSchema = new mongoose.Schema({
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
});

const Services = mongoose.models.Services || mongoose.model('Services', ServicesSchema);

export default Services;