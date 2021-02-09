import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fulldataRoute from "./routes/fulldataRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/", fulldataRoute);
app.use("/user", userRoute);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.BACKENDPORT || 3333;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
