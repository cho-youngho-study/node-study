import express from "express";
import { join, login, logout } from "../controller/userController";
import { home, search } from "../controller/videoController";
import routers from "../routers";

const globalRouter  = express.Router();

globalRouter.get(routers.home,home);
globalRouter.get(routers.join, join);
globalRouter.get(routers.login, login);
globalRouter.get(routers.logout, logout);
globalRouter.get(routers.search, search);

export default globalRouter;