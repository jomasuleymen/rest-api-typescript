import fs from "fs";
import path from "path";

function readFile(filePath: string) {
    return fs.readFileSync(path.resolve(__dirname, `../src${filePath}`), {
        encoding: "utf8",
    });
}

const accessPrivateKey = readFile("/certificates/private_key.pem");
const refreshPrivateKey = readFile("/certificates/private_key.pem");
const accessPublicKey = readFile("/certificates/public_key.pem");
const refreshPublicKey = readFile("/certificates/public_key.pem");

export default {
    port: process.env.PORT || 3000,
    db: "mongodb://root:password@localhost:27017/",
    saltRound: 10,
    accessToken: {
        TTL: 1800, // 30 min
        privateKey: accessPrivateKey,
        publicKey: accessPublicKey,
    },
    refreshToken: {
        TTL: 2.628e6, // 1 month
        privateKey: refreshPrivateKey,
        publicKey: refreshPublicKey,
    },
};
