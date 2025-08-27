import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: false }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", authRouter);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on PORT : ${PORT}`);
});
