import express from "express";

const router = express.Router();

router.post("/generate", (_req, res) => {
    res.send("Generating JWT...");
});

export default router;
