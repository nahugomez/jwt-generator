import express from "express";
import router from "./routes/jwtRoutes";
import dotenv from "dotenv";

const PORT = 1717;
const app = express();
dotenv.config();

// MIDDLEWARE CONFIGS
// El siguiente middleware transforma req.body en un JSON
app.use(express.json());

// Al utilizar el guion bajo (_req), se evita el warning de que es un parámetro declarado pero no utilizado.
app.get("/", (_req, res) => {
    res.send("Server is working");
});

app.use("/jwt", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
