import morgan from "morgan";
import express from "express";

const app = express();

const port = 4000;

app.use(morgan("dev"));

app.use(express.json());

app.listen(port);

app.get("/students", (req, res) => {
  res.status(200).json({ students: [] });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});
