import { DataSource } from "typeorm";
import { Task } from "./tasks/domain/Task";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSW,
    database: process.env.DB_NAME,
    entities: [Task],
    logging: false,
    synchronize: true
})