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

export const findSession = async (session_id: string) => {
    return await sessionModel.findOne({ _id: session_id, valid: true });
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

    return signToken(
        { email: user.email, name: user.name, session_id: session._id },
        TokenType.ACCESS
    );
};
