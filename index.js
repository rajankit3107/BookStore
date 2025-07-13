import express from "express";
import connectDB from "./database/config.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
