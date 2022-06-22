import { Request, Response } from "express";
import {
    createSession,
    issueJwtTokens,
    updateSession,
} from "../service/session.service";
import { validateUser } from "../service/user.service";

export const createSessionHandler = async (req: Request, res: Response) => {
    const user = await validateUser(req.body); // user data except password

    if (!user) {
        return res.status(401).send("Invalid email or password.");
    }

    /* create session */
    const session = await createSession(user._id);

    const { accessToken, refreshToken } = await issueJwtTokens(user, session);

    /* send tokens */
    res.setHeader("authorization", `Bearer ${accessToken}`)
        .setHeader("x-refresh", refreshToken)
        .send("Success");
};

export const getSessionHandler = async (req: Request, res: Response) => {
    const userId = res.locals.user._id;

    return res.send(res.locals.user);
};

export const deleteSessionHandler = async (req: Request, res: Response) => {
    const sessionId = res.locals.user.session_id;

    await updateSession(sessionId, { valid: false });

    res.removeHeader("authorization");
    res.removeHeader("x-refresh");
    return res.send("Deleted");
};
