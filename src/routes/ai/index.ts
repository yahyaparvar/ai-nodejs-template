import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

export const aiRouter = express.Router();
aiRouter.post("/", async (req, res) => {
});
