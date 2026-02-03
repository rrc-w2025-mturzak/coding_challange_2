import express, { Router } from "express";
import {
    getAllEvent,
    createItem,
    updateItem,
    deleteItem,
    healthData,
} from "../controllers/eventController";

const eventRouter: Router = express.Router();

eventRouter.get("/health", healthData);
eventRouter.get("/events", getAllEvent);
eventRouter.post("/", createItem);
eventRouter.put("/:id", updateItem);
eventRouter.delete("/:id", deleteItem);

export default eventRouter;