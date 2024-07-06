import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import { aiRouter } from "./routes/ai";


dotenv.config();

const app = express();
app.use(express.json());

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
};
export const mainRouter = express.Router();

mainRouter.get("/", async (req, res) => {
  res.json({ deployed: true });
});

app.use(cors(corsOpts));
app.use("/", mainRouter);
app.use("/ai", aiRouter);

// Set timeout to infinity
const timeout = 0;
app.use((req: Request, res: Response, next: NextFunction) => {
  req.setTimeout(timeout, next);
  next();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
