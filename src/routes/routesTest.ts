import { Router } from "express";
import { AddTest } from "../controller/testController";

const route = Router();

route.get("/", AddTest);

export default route;
