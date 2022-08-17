import express from "express";
import cors from "cors";
import { photoRouter } from "./src/routers/Photo-Router";

const app = express();
app.use(cors());
app.use(express.json());

const port = 5001;
app.use('/photos', photoRouter)

app.listen(port, () => {
  console.log("now listening on port", port);
});
