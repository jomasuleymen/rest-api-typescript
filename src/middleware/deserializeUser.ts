import { Request, Response, NextFunction } from "express";
import { reIssueAccessToken } from "../service/session.service";
import { TokenType, verifyToken } from "../utils/jwt.utils";

export default async function deserializeUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken) return next();

    const token = bearerToken.split(" ")[1];
    const { decoded, expired, message } = verifyToken(token, TokenType.ACCESS);

    if (decoded) {
        res.locals.user = decoded;
        return next();
    }

    const refreshToken = <string>req.headers["x-refresh"];

    if (expired && refreshToken) {
        // reissue new access token and refresh token
        const newAccessToken = await reIssueAccessToken(refreshToken);

        if (newAccessToken) {
            res.locals.user = verifyToken(
                newAccessToken as string,
                TokenType.ACCESS
            );
            res.setHeader("authorization", `Bearer ${newAccessToken}`);
        } else {
            res.removeHeader("authorization");
            res.removeHeader("x-refresh");
        }
    } else if (message) {
        return res.status(401).send(message);
    }

    return next();
}
