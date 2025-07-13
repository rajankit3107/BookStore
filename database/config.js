import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect("mongodb://localhost:27017/Book_store")
    .then(() => console.log(`connected to mongoDB ✅`))
    .catch((err) => console.log(`monogDB connection failed ❌`, err));
}

export default connectDB;
