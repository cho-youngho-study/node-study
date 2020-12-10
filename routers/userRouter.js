import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controller/userController";
import routers from "../routers";

const userRouter  = express.Router();

userRouter.get(routers.home, users);
userRouter.get(routers.userDetail, userDetail);
userRouter.get(routers.editProfile, editProfile);
userRouter.get(routers.changePassword,changePassword);

export default userRouter;