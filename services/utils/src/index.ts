import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { sendMailHandler } from "./mailHandler.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Utils service is running"));

// Registered before express.json() because QStash signature verification needs the raw body
app.post(
  "/api/utils/send-mail",
  express.raw({ type: "*/*", limit: "1mb" }),
  sendMailHandler
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/utils", routes);

app.listen(process.env.PORT, () => {
  console.log(
    `Utils Service is running on http://localhost:${process.env.PORT}`
  );
});
