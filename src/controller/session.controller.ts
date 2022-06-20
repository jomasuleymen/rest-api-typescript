import { Request, Response } from "express";
import { createSession, updateSession } from "../service/session.service";
import { validateUser } from "../service/user.service";
import { signToken, TokenType } from "../utils/jwt.utils";

export const createSessionHandler = async (req: Request, res: Response) => {
    const user = await validateUser(req.body); // user data except password

    if (!user) {
        return res.status(401).send("Invalid email or password.");
    }

    // create session
    const session = await createSession(user._id);

    // issue new access token
    const accessToken = signToken(
        { email: user.email, name: user.name, session_id: session._id },
        TokenType.ACCESS
    );

    // issue new refresh token
    const refreshToken = signToken(
        { session_id: session._id },
        TokenType.REFRESH
    );

    // send tokens
    res.setHeader("authorization", `Bearer ${accessToken}`)
        .setHeader("x-refresh", refreshToken)
        .send("Success");
};

export const deleteSessionHandler = async (req: Request, res: Response) => {
    const sessionId = res.locals.user.session_id;

    await updateSession(sessionId, { valid: false });

    res.removeHeader("authorization");
    res.removeHeader("x-refresh");
    return res.send("Success");
};

export const getSessionHandler = async (req: Request, res: Response) => {
    const sessionId = res.locals.user.session_id;
    
    return res.send(sessionId);
};
