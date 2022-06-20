import { object, string } from "zod";

export const createUserSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email("Not a valid email"),
        name: string({
            required_error: "name is required",
        }).min(4, "name too short - should contain at least 4 characters."),
        password: string({
            required_error: "password is required",
        }).min(6, "password too short - should contain at least 6 characters."),
        passwordConfirmation: string({
            required_error: "passwordConfirmation is required",
        }),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});

export const userSessionSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email("Not a valid email"),
        password: string({
            required_error: "password is required",
        }),
    }),
});
