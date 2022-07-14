import { Router } from "express";
import { AddTest, GetAllTest, GetTestById } from "../controller/testController";

const route = Router();

route.post("/", AddTest);
route.get("/", GetAllTest);
route.get("/:id", GetTestById);

export default route;
