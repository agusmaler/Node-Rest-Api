import express from "express";
import getSubscriber from "../middlewares/getSubscriber.js";

import {
  getAll,
  addSubscriber,
  updateSubscriber,
  deleteSubscriber,
  getOne
} from "../controllers/subscribers.js";

const router = express.Router();

//get all
router.get("/", getAll);

//get one
router.get("/:id", getSubscriber, getOne);

//creating one
router.post("/", addSubscriber);

//updating one
router.patch("/:id", getSubscriber, updateSubscriber);

//deleting one
router.delete("/:id", getSubscriber, deleteSubscriber);

export default router;
