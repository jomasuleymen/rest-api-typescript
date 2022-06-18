import { SchemaDefinition } from "mongoose";
import userModel, { UserDocument } from "../models/user.model";

export const createUser = async (newUser: SchemaDefinition<UserDocument>) => {
    try {
        return await userModel.create(newUser);
    } catch (e: any) {
        throw new Error(e);
    }
};
