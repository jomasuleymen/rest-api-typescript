import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    comparePassword(candidate: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre("save", async function (next) {
    const user = this as UserDocument;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(config.get<number>("saltRound"));
    user.password = await bcrypt.hash(user.password, salt);
    return next();
});

userSchema.methods.comparePassword = async function (
    candidate: string
): Promise<boolean> {
    const user = this as UserDocument;

    const isSame = bcrypt.compare(candidate, user.password);

    return isSame.catch((e) => false);
};

export default mongoose.model("User", userSchema);
