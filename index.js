import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import { dbConnection } from './utils/dbConnection.js';
import serviceRoute from "./routes/serviceRoutes.js";
import packageRoute from "./routes/packageRoutes.js";


const app = express();

// body parser middleware to handle request body
app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({ path:".env" })

// cors to allow cross origin access
app.use(cors({ credentials: true, origin:true }));
app.options("*", cors());


  
//database connection
app.use(async (req, res, next) => {
    await dbConnection();
    next();
});

app.use('/servicesroutes', serviceRoute);
app.use('/packageroutes', packageRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`App running on port ${PORT}`);
})
