import express from "express";
import { deleteVideo, editVideo, upload, videos, videosDetail } from "../controller/videoController";
import routers from "../routers";

const videoRouter  = express.Router();

videoRouter.get(routers.home, videos);
videoRouter.get(routers.upload, upload);
videoRouter.get(routers.videosDetail, videosDetail);
videoRouter.get(routers.editVideo, editVideo);
videoRouter.get(routers.deleteVideo, deleteVideo);

export default videoRouter;