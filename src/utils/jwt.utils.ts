import jwt from "jsonwebtoken";
import config from "config";

export function signToken(payload: object | string, options?: jwt.SignOptions) {
    return jwt.sign(payload, config.get<string>("privateKey"), {
        ...options,
        algorithm: "RS256",
    });
}

export function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, config.get<string>("publicKey"));
        return {
            decoded,
            expired: false,
        };
    } catch (err: any) {
        const data = {
            decoded: null,
            expired: false,
            message: err.message,
        };
        if (err.message == "jwt expired") data.expired = true;
        return data;
    }
}
