import userModel, { IUser } from "../models/user.model";
import { SchemaDefinition } from "mongoose";
import { omit } from "lodash";

export const createUser = async (newUser: SchemaDefinition<IUser>) => {
    const user = await userModel.create(newUser);
    return omit(user.toJSON(), "password");
};

export const validateUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    const user = await userModel.findOne({ email: email });
    if (!user) return false;

    const isValid = await user.comparePassword(password);
    if (!isValid) return false;

    return omit(user.toJSON(), "password");
};

export const findUser = async (user_id: string) => {
    return await userModel.findById(user_id).lean();
};
