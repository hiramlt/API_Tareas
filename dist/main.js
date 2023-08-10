"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
function main() {
    const app = (0, express_1.default)();
    app.use((0, morgan_1.default)('dev'));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Started app on port ${PORT}`);
    });
}
main();
