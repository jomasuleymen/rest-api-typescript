import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

export default async () => {
    const uri = config.get<string>("db");

    return await mongoose
        .connect(uri)
        .then(() => {
            logger.info("Connected to database");
        })
        .catch((err: Error) => {
            logger.warn("Couldn't connect to database");
            logger.error(`${err.name}: ${err.message}`);
            process.exit();
        });
};
