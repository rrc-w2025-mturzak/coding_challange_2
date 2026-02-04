import request from "supertest";
import express from "express";
import eventRouter from "src/api/v1/routes/eventRoutes";
import * as controller from "src/api/v1/controllers/eventController";

jest.mock("src/api/v1/controllers/eventController");

const app = express();
app.use(express.json());
app.use("/api/v1", eventRouter);

describe("Route EventName", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("GET /api/v1/health", () => {
		it("should call getAll event", async () => {
			await request(app).get("/api/v1/health");
			expect(controller.getAllEvent).toHaveBeenCalled();
		});
	});

	describe("POST /api/v1/events", () => {
		it("should call create event", async () => {
			await request(app).post("/api/v1/events").send({
			});
			expect(controller.createEvent).toHaveBeenCalled();
		});
	});

	describe("PUT /api/v1/events/:id", () => {
		it("should call update event", async () => {
			await request(app).put("/api/v1/events/1").send({
			});
			expect(controller.updateEvent).toHaveBeenCalled();
		});
	});

	describe("DELETE /api/v1/events/:id", () => {
		it("should call delete event", async () => {
			await request(app).delete("/api/v1/events/1");
			expect(controller.deleteEvent).toHaveBeenCalled();
		});
	});
});