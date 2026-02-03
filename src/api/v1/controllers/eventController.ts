import { Request, Response } from "express";
import { getAllItem, createNewItem, updateItemById, deleteItemById } from "../servaces/eventService";

export const getAllItems = (req: Request, res: Response) => {
    let result = getAllItem();
    res.status(200)
    res.json(result);
};

export const createItem = (req: Request, res: Response) => {
    let name = req.body.name;
    let price = req.body.price;
    let result = createNewItem(name, price);
    res.status(200).json(result);
};

export const updateItem = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let name = req.body.name;
    let price = req.body.price;
    let result = updateItemById(name, price)
    res.status(200).json(result);
};

export const deleteItem = (req: Request, res: Response) => {
    let id = Number(req.params.id);
    let result = deleteItemById(id);
    res.status(200).json(result);
};