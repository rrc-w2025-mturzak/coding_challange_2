import { Request, Response } from "express";

export const getAllItems = (req: Request, res: Response) => {
    res.status(200).send("Get all items");
};

export const createItem = (req: Request, res: Response) => {
    let name = req.body.name;
    let price = req.body.price;
    res.status(201).send(`Create a new item. The name is ${name} and a price of ${price}`);
};

export const updateItem = (req: Request, res: Response) => {
    let name = req.body.name;
    let price = req.body.price;
    res.status(200).send(`Update item. The name is ${name} and a price of ${price}`);
};

export const deleteItem = (req: Request, res: Response) => {
    let name = req.body.name;
    let price = req.body.price;
    res.status(200).send(`Delete item. The name is ${name} and a price of ${price}`);
};