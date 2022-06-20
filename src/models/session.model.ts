import mongoose from "mongoose";
import { IUser } from "./user.model";

export interface ISession extends mongoose.Document {
    user_id: IUser["_id"];
    valid: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema<ISession>(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        valid: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Session", sessionSchema);
