import "reflect-metadata"
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import * as dotenv from 'dotenv';   // Cargar variables de entorno
dotenv.config();

import { AppDataSource } from "./db";
import { taskRouter } from "./tasks/infraestructure/TaskRouter";

async function main() {
    try {
        await AppDataSource.initialize().then(() => {
            console.log("Database connected")
        })
        
        const app = express();
        app.use(morgan('dev'))
        app.use(cors())
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/tasks', taskRouter);
        app.get("/uploads/:filename", (req, res) => {    // Ruta para visualizar imagenes/archivos
            const filename = req.params.filename;
            const imagePath = path.join(__dirname, "uploads", filename);
            res.sendFile(imagePath);
        });

        const PORT = process.env.PORT || 3000
        app.listen(PORT, () => {
            console.log(`Started app on port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}

main();