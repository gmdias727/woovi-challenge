import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGODB_URI;

export const databaseConnection = () => {
    if (URI != undefined) {
        mongoose.connect(URI);
    } else {
        throw new Error('Failed to connect to MongoDB database');
    }
};
