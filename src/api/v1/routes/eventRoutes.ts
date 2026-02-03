import express, { Router } from "express";
import {
    getAllItems,
    createItem,
    updateItem,
    deleteItem,
    healthData,
} from "../controllers/eventController";

const eventRouter: Router = express.Router();

eventRouter.get("/health", healthData);
eventRouter.get("/", getAllItems);
eventRouter.post("/", createItem);
eventRouter.put("/:id", updateItem);
eventRouter.delete("/:id", deleteItem);

export default eventRouter;