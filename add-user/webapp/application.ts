import express from "express";
import { router } from "./endpoints";
const port = 8000;

const app = express();

app.use(express.json());

app.use(router);

app.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

app.listen(port, () =>
  console.log(`Server listening on port ${port}: http://localhost:${port}`)
);
