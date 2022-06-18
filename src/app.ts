import express from "express";
import config from "config";
import db from "./startup/db";
import logger from "./utils/logger";

const app = express();

const PORT = config.get<number>("port");

app.listen(PORT, async () => {
    logger.info(`Listening port ${PORT}`);
    await db();
});
