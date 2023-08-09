import express from "express";
import { ObtainJWT } from "../services/jwtService";
import { PostParameters } from "../types";

const router = express.Router();

router.post("/generate", async (req, res) => {
    try {
        console.log("Generating JWT...");
        const Body: PostParameters = req.body;
        const JWT = await ObtainJWT(Body);
        const Now = new Date();
        console.log(`✔ ${Now} JWT Generated`);
        res.send(JWT);
    } catch (err) {
        const error = err as Error;
        console.log("✖ An error was ocurred obtaining JWT");
        res.status(400).send(error.message);
    }
});

export default router;
