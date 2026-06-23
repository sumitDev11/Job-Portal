import express from "express";
import authRoutes from "./routes/auth.js";
import { connectKafka } from "./producer.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

connectKafka();

app.get("/", (req, res) => res.send("Auth service is running"));
app.use("/api/auth", authRoutes);

export default app;
