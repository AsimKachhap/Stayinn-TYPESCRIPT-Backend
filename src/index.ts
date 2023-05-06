import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
app.use(morgan("dev"));
dotenv.config();

(async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
    } as mongoose.ConnectOptions);
    console.log("CONNECTED TO MONGODB SERVER");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR");
    console.log(error);
  }
})();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to HomePage.");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
  console.log(process.env.HELLO);
});
