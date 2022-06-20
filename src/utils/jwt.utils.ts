import jwt from "jsonwebtoken";
import config from "config";

export enum TokenType {
    ACCESS = "accessToken",
    REFRESH = "refreshToken",
}

interface TokenConf {
    /* how actually looks like token configurations in the environment */
    TTL: number;
    privateKey: string;
    publicKey: string;
}

function getTokenConf(tokenType: TokenType): TokenConf {
    return config.get(tokenType);
}

export function signToken(
    payload: object,
    tokenType: TokenType,
    options?: jwt.SignOptions
) {
    const tokenConf = getTokenConf(tokenType);

    return jwt.sign(payload, tokenConf.privateKey, {
        ...options,
        algorithm: "RS256",
        expiresIn: tokenConf.TTL,
    });
}

export interface VerifiedToken {
    decoded: jwt.JwtPayload | string | null;
    expired: Boolean;
    message?: string;
}

export function verifyToken(
    token: string,
    tokenType: TokenType
): VerifiedToken {
    const tokenConf = getTokenConf(tokenType);

    try {
        const decoded = jwt.verify(token, tokenConf.publicKey);
        return {
            decoded,
            expired: false,
        };
    } catch (err: any) {
        return {
            decoded: null,
            expired: err.message == "jwt expired",
            message: err.message,
        };
    }
}
