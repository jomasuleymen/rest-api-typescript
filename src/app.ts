import express from "express";
import config from "config";
import logger from "./utils/logger";

import db from "./startup/db";
import routes from "./startup/routes";

const app = express();

routes(app);
db();

const PORT = config.get<number>("port");

app.listen(PORT, async () => {
    logger.info(`Listening port ${PORT}`);
});
