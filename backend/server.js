import express from "express";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import mongoose from "mongoose";
import env from "dotenv";

env.config();

const app = express();
const PORT = 3001;

// DB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/users", userRouter);

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
