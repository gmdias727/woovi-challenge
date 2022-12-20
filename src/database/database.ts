import mongoose from "mongoose";
import { config } from "../config";

export const connectDB = () => {
  mongoose.connect(config.MONGO_URI)
  mongoose.set('strictQuery', false);
}
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => console.log("Database connected..."));
