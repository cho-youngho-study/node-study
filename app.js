import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {localsMiddleware} from "./localsMiddleware";
import routers from './routers';
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videosRouter";

const app = express();

app.set('view engine', 'pug');
//route
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(localsMiddleware);

app.use(routers.home,globalRouter);
app.use(routers.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;