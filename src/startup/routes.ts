import { Express, Request, Response } from "express";
import { createSessionHandler } from "../controller/session.controller";
import { userRegister } from "../controller/user.controller";

import validateResource from "../middleware/validateRequest";
import { createUserSchema, userSessionSchema } from "../schema/user.schema";

const routes = (app: Express) => {
    app.get("/books", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post("/api/users", validateResource(createUserSchema), userRegister);
    app.post(
        "/api/sessions",
        validateResource(userSessionSchema),
        createSessionHandler
    );
};

export default routes;
