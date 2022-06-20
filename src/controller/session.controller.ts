import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validateUser } from "../service/user.service";

export const createSessionHandler = async (req: Request, res: Response) => {
    const user = await validateUser(req.body);

    if (!user) {
        return res.status(401).send("Invalid email or password.");
    }

    const session = await createSession(user._id);
    // put session to jwt
};
