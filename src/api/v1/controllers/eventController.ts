import { Request, Response } from "express";
import { getAllEvents, createNewEvent, updateEventById, deleteEventById, getOneEvent, calculatePopularity, events} from "../servaces/eventService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getAllEvent = (req: Request, res: Response) => {
    let result = getAllEvents();
    res.status(HTTP_STATUS.OK).json(result);
};

export const getEventById = (req: Request, res: Response): void => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: `Invalid event ID: ${req.params.id}`
            });
        } 
        else {
            const item = getOneEvent(id);

            if (!item) {
                res.status(HTTP_STATUS.NOT_FOUND).json({
                    message: `Event with ID ${id} not found`
                });
            } else {
                res.status(HTTP_STATUS.OK).json({
                    message: "Item retrieved successfully",
                    data: item,
                });
            }
        }

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            message: "Failed to retrieve items",
        });
    }
};

export const rateEventById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: `Invalid event ID: ${req.params.id}`
        });
    } else {
        const event = events.find(e => e.id === id);

        if (!event) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: `Event with ID ${id} not found`
            });
        } else {
            const result = calculatePopularity(event);
            res.status(HTTP_STATUS.OK).json(result);
        }
    }
};


export const createEvent = (req: Request, res: Response) => {
    let id = req.body.id;
    let name = req.body.name;
    let date = req.body.date;
    let capacity = req.body.capacity;
    let registrationCount = req.body.registrationCount;
    let result = createNewEvent(id, name, date, capacity, registrationCount);
    res.status(HTTP_STATUS.CREATED).json(result);
};

export const updateEvent = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let name = req.body.name;
    let date = req.body.date;
    let capacity = req.body.capacity;
    let registrationCount = req.body.registrationCount;
    let result = updateEventById(id, name, date, capacity, registrationCount)
    res.status(HTTP_STATUS.OK).json(result);
};

export const deleteEvent = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let result = deleteEventById(id);
    res.status(HTTP_STATUS.OK).json(result);
};

export const healthData = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
};
