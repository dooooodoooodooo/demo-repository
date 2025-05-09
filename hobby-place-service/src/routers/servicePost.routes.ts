import express from "express";

import { createServicePost } from "../controllers/servicePostControllers/createServicePost.controller";
import { putServicePost } from "../controllers/servicePostControllers/putServicePost.controller";
import { deleteServicePost } from "../controllers/servicePostControllers/deleteServicePost.controller";
import { getServicePost } from "../controllers/servicePostControllers/getServicePost.controller";
import { getPetPostMid } from "../middlewares/petPostMiddlewares/getPetPostMid";
import { getServicePostCategoryId } from "../controllers/servicePostControllers/getServicePostCategoryId.controller";
import { postIdFoundMid } from "../middlewares/petPostMiddlewares/postIdFoundMid";
import { getServicePostByCategory } from "../controllers/servicePostControllers/getServicePostByCategory";

export const servicePostRouter = express.Router();

servicePostRouter.get("/", getServicePost);
servicePostRouter.post("/", createServicePost);
servicePostRouter.delete("/:id", postIdFoundMid, deleteServicePost);
servicePostRouter.put("/:id", postIdFoundMid, putServicePost);
servicePostRouter.get("/:categoryId", getPetPostMid, getServicePostCategoryId);
servicePostRouter.get("/categoryId/:id", getServicePostByCategory);
