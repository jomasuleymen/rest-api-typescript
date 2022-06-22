import { Express } from "express";
import {
    createSessionHandler,
    deleteSessionHandler,
    getSessionHandler,
} from "../controller/session.controller";
import { userRegister } from "../controller/user.controller";
import requireUser from "../middleware/requireUser";

import validateResource from "../middleware/validateResource";
import { createUserSchema, userSessionSchema } from "../schema/user.schema";

const routes = (app: Express) => {
    app.post("/api/users", validateResource(createUserSchema), userRegister);
    app.post(
        "/api/sessions",
        validateResource(userSessionSchema),
        createSessionHandler
    );
    app.get("/api/sessions", requireUser, getSessionHandler);
    app.delete("/api/sessions", requireUser, deleteSessionHandler);
};

export default routes;
