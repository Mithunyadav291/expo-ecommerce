import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGODB_URI);
    console.log("MongoDB connected successfully.", conn.connection.host);
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
