import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import userRoutes from "./routes/users.js";
import blogRoutes from "./routes/blogs.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGO).catch((e) => console.log(`${e}`));
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

// Middleware
app.use(express.json());

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT || "5000", () => {
  connect();
  console.log(`Backend running on PORT: 5000`);
});
