import { Request, Response } from "express";
import { getAllEvents, createNewItem, updateItemById, deleteItemById, HealthCheckResponse } from "../servaces/eventService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getAllEvent = (req: Request, res: Response) => {
    let result = getAllEvents();
    res.status(HTTP_STATUS.OK)
    res.json(result);
};

export const createItem = (req: Request, res: Response) => {
    let name = req.body.name;
    let price = req.body.price;
    let result = createNewItem(name, price);
    res.status(HTTP_STATUS.CREATED).json(result);
};

export const updateItem = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let name = req.body.name;
    let price = req.body.price;
    let result = updateItemById(name, price)
    res.status(HTTP_STATUS.OK).json(result);
};

export const deleteItem = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let result = deleteItemById(id);
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
