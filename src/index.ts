import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
app.use(morgan("dev"));
dotenv.config();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to HomePage.");
});

app.listen(8080, () => {
  console.log("SERVER IS UP AND RNNING ON PORT 8080");
  console.log(process.env.HELLO);
});
