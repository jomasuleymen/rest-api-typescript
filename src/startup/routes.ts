import { Express, Request, Response } from "express";
import { userRegister } from "../controller/user.controller";

const routes = (app: Express) => {
    app.get("/books", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post("/api/users", userRegister);
};

export default routes;
