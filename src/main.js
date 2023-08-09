import express from "express";
import bodyParser from "body-parser";

function main() {
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const PORT = 3000

    app.listen(PORT, () => {
        console.log(`Started app on port ${PORT}`);
    });
}

main();