import express, { Express } from "express";
import deserializeUser from "../middleware/deserializeUser";

export default (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(deserializeUser);
};
