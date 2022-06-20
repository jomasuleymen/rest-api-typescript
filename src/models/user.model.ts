import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface IUser extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidate: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    const user = this as IUser;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(config.get<number>("saltRound"));
    user.password = await bcrypt.hash(user.password, salt);
    return next();
});

userSchema.methods.comparePassword = async function (
    candidate: string
): Promise<boolean> {
    const user = this as IUser;

    const isSame = bcrypt.compare(candidate, user.password);

    return isSame.catch((e) => false);
};

export default mongoose.model("User", userSchema);
