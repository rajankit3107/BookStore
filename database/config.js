import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log(`connected to mongoDB ✅`))
    .catch((err) => console.log(`monogDB connection failed ❌`, err));
}

export default connectDB;
