import { rootRouter, userRouter } from "@routes";
import express from "express";
import cors from "cors";
const port = 5000;
const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.listen(port, () =>
  console.log(`🚀 Server ready  at: http://localhost:${port}`)
);
