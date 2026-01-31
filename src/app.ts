import express, {Express} from "express";
import { getAllItems, createItem, deleteItem, updateItem } from "./api/v1/controllers/eventController";

const app: Express = express();

app.use(express.json());

app.get("/api/v1/items", getAllItems);

app.post("/api/v1/items", createItem);

app.put("/api/v1/items/:id", updateItem);

app.delete("/api/v1/items/:id", deleteItem);

export default app;
