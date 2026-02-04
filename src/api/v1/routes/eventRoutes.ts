import express, { Router } from "express";
import {
    getAllEvent,
    getEventById,
    rateEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    healthData,
} from "../controllers/eventController";

const eventRouter: Router = express.Router();

eventRouter.get("/health", healthData);
eventRouter.get("/events", getAllEvent);
eventRouter.get("/events/:id", getEventById);
eventRouter.get("/events/:id/popularity", rateEventById);
eventRouter.post("/events", createEvent);
eventRouter.put("/events/:id", updateEvent);
eventRouter.delete("/events/:id", deleteEvent);

export default eventRouter;