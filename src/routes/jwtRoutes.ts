import express from "express";
import { ObtainJWT } from "../services/jwtService";

const router = express.Router();

router.post("/generate", async (_req, res) => {
    try {
        console.log("✔ Generating JWT...");
        const JWT = await ObtainJWT();
        res.send(JWT);
    } catch (err) {
        console.log("✖ An error was ocurred obtaining JWT");
        const error = err as Error;
        console.error(error.message);
    }
});

export default router;
