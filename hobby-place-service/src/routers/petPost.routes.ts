import express from "express";
import { createPetPost } from "../controllers/petPostControllers/createPetPost.controller";
import { putPetPost } from "../controllers/petPostControllers/putPetPost.controller";
import { deletePetPost } from "../controllers/petPostControllers/deletePetPost.controller";
import { getPetPost } from "../controllers/petPostControllers/getPetPost.controller";
import { getPetPostCategoryId } from "../controllers/petPostControllers/getPetPostCategoryId.controller";
import { postIdFoundMid } from "../middlewares/petPostMiddlewares/postIdFoundMid";
import { getPetPostId } from "../controllers/petPostControllers/getPetPostId.controller";
import { getPetPostByName } from "../controllers/petPostControllers/getPetPostSearchByName.controller";

export const petPostRouter = express.Router();
petPostRouter.get("/", getPetPost);
petPostRouter.post("/:id", createPetPost);
petPostRouter.delete("/:id", postIdFoundMid, deletePetPost);
petPostRouter.put("/:id", putPetPost);
petPostRouter.get("/petId/:Id", getPetPostId);
petPostRouter.get("/search/:value", getPetPostByName);
petPostRouter.get("/:categoryId", getPetPostCategoryId);
