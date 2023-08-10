import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "h203420Passw1.",
    database: "tasks_db",
    entities: [],
    logging: true
})