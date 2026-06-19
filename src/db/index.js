import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // 1. Pehle check karo MONGODB_URI sahi se aa raha hai
        let uri = process.env.MONGODB_URI;

        if (!uri) {
            console.log("MONGODB_URI is not defined in .env file");
            process.exit(1);
        }

        // 2. Agar URI ke aakhir mein '/' hai, to use automatically hata do
        if (uri.endsWith('/')) {
            uri = uri.slice(0, -1);
        }

        // 3. Ab clean URI ke saath connect karo
        const connectionInstance = await mongoose.connect(`${uri}/${DB_NAME}`);
        
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;