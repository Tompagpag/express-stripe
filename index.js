import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

// Middlewares here
app.use(express.json());
app.use(cors());

// Routes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Listen
app.listen(8000, () => {
  console.log("Server started at port 8000");
});
