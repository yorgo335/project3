import "reflect-metadata";
import { DataSource } from "typeorm";
import { product } from "./entities/Product.js";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [product],
    subscribers: [],
    migrations: [],
});