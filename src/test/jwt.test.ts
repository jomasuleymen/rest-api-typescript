import { signToken, verifyToken } from "../utils/jwt.utils";

describe("JWT", () => {
    const payload = { name: "Jest" };
    const token = signToken(payload);
    const expiredToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWmhvbWFydCIsImlhdCI6MTY1NTcxMDU2MiwiZXhwIjoxNjU1NzEwNTkyfQ.BlICX5UnQwOZloXS1wqtU2_lrbys2yESt6u-oUWHEfWulVV5hfuX2z5dLX3WNhtBImNGKWv763HRMihV3b9jzXHO_gdrZaianpTpGO1PeZvkF8OTajEjQrN1vVzwirnyJ2Wtt_0xdHFG-5LNAUnJ69sgswVR2-YX8JnuhYbremzXnI_UbS2Jy7zu4LOPmB64YpXGMwt_KlsxqN0womujvzMera2wvA9H1VxIl9a048n0vOZkp42ZmLa-BJZ-leOJEJNoZoJBNVjaGWHzjOrH3NN1RgyI2SILdzNK3scfDB9WzCQhYjjrusmWwqPFtN44uWuWeoyfpeX4sfU4vQhgdw`;
    const invalidToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6kpXVCJ9.eyJuYW1lIjoiWmhvbWFydCIsImlhdCI6MTY1NTcxMDU2MiwiZXhwIjoxNjU1NzEwNTkyfQ.BlICX5UnQwOZloXS1wqtU2_lrbys2yESt6u-oUWHEfWulVV5hfuX2z5dLX3WNhtBImNGKWv763HRMihV3b9jzXHO_gdrZaianpTpGO1PeZvkF8OTajEjQrN1vVzwirnyJ2Wtt_0xdHFG-5LNAUnJ69sgswVR2-YX8JnuhYbremzXnI_UbS2Jy7zu4LOPmB64YpXGMwt_KlsxqN0womujvzMera2wvA9H1VxIl9a048n0vOZkp42ZmLa-BJZ-leOJEJNoZoJBNVjaGWHzjOrH3NN1RgyI2SILdzNK3scfDB9WzCQhYjjrusmWwqPFtN44uWuWeoyfpeX4sfU4vQhgdw`;

    test("should return a expired error", () => {
        expect(verifyToken(expiredToken)).toEqual({
            decoded: null,
            expired: true,
            message: "jwt expired",
        });
    });

    test("should return a malformed error", () => {
        expect(verifyToken("asdasd")).toEqual({
            decoded: null,
            expired: false,
            message: "jwt malformed",
        });
    });

    test("should return a invalid token error", () => {
        expect(verifyToken(invalidToken)).toEqual({
            decoded: null,
            expired: false,
            message: "invalid token",
        });
    });

    test("should verify token without any errors", () => {
        const { decoded, expired } = verifyToken(token);
        expect(decoded).toMatchObject(payload);
    });
});
