import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;

export const databaseConnection = async () => {
    if (URI === typeof String) {
        return await mongoose.connect(URI);
    }
    throw new Error("Missing MongoDB URI");
};
