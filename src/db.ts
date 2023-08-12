import { DataSource } from "typeorm";
import { Task } from "./tasks/domain/Task";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "h203420Passw1.",
    database: "tasks_db",
    entities: [Task],
    logging: false,
    synchronize: true
})