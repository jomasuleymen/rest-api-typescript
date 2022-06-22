import sessionModel, { ISession } from "../models/session.model";
import { signToken, TokenType, verifyToken } from "../utils/jwt.utils";
import { UpdateQuery } from "mongoose";
import { get } from "lodash";
import { findUser } from "./user.service";

export const createSession = async (userId: string) => {
    const session = await sessionModel.create({ user_id: userId });
    return session.toJSON();
};

export const updateSession = async (
    session_id: string,
    update: UpdateQuery<ISession>
) => {
    await sessionModel.updateOne({ _id: session_id, valid: true }, update);
};

export const findSession = async (sessionId: string): Promise<ISession> => {
    return await sessionModel.find({ _id: sessionId, valid: true }).lean();
};

export const issueJwtTokens = async (user: any, session: any) => {
    /* issue new access token */
    const accessToken = signToken(
        genJwtPayload(user, session),
        TokenType.ACCESS
    );

    /* issue new refresh token */
    const refreshToken = signToken(
        genJwtPayload(user, session),
        TokenType.REFRESH
    );

    return {
        accessToken,
        refreshToken,
    };
};

export const reIssueAccessToken = async (
    refreshToken: string
): Promise<string | boolean> => {
    const { decoded, expired } = verifyToken(refreshToken, TokenType.REFRESH);

    const session_id = get(decoded, "session_id");
    if (expired || !session_id) return false;

    const session = await findSession(session_id);

    if (!session) return false;

    const user = await findUser(session.user_id);
    if (!user) return false;

    return signToken(genJwtPayload(user, session), TokenType.ACCESS);
};

function genJwtPayload(user: any, session: any) {
    return { ...user, session_id: session._id };
}
