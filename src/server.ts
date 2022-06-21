import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";
import logger from "./utils/logger";

import db from "./startup/db";
import routes from "./startup/routes";
import middlewares from "./startup/middlewares";

const app = express();

db();
middlewares(app);
routes(app);

const PORT = process.env.PORT || config.get<number>("port");

app.listen(PORT, async () => {
    logger.info(`Listening port ${PORT}`);
});
