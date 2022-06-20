import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";
import { omit } from "lodash";

export const userRegister = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        return res.status(201).json(user);
    } catch (e: any) {
        logger.error(e);
        return res.status(409).send(e.message);
    }
};
