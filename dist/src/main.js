"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
function main() {
    try {
        const app = (0, express_1.default)();
        db_1.AppDataSource.initialize();
        app.use((0, morgan_1.default)('dev'));
        app.use((0, cors_1.default)());
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Started app on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
