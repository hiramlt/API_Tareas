import "reflect-metadata"
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import { AppDataSource } from "./db";

function main() {
    try {
        const app = express();
        AppDataSource.initialize()
        
        app.use(morgan('dev'))
        app.use(cors())
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        const PORT = 3000
        app.listen(PORT, () => {
            console.log(`Started app on port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}

main();