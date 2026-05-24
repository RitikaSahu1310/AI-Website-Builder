import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import websiteRouter from "./routes/websites.routes.js";
import billingRouter from "./routes/billing.routes.js";
import { stripeWebhook } from "./controllers/stripeWebhook.controller.js";

dotenv.config();

const app = express();

app.post("/api/stripe/webhook",express.raw({type:"application/json"}),
stripeWebhook)

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"https://ai-website-builder-1-68jb.onrender.com",
  credentials:true
}));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website",websiteRouter)
app.use("/api/billing",billingRouter)
app.use(express.json());

const startServer = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
