import { Router, Request, Response } from "express";
import hotelController from "../controllers/hotelController";

const router = Router();

router.get("/", hotelController.getAllHotels);
router.post("/", hotelController.addHotel);
router.get("/:hotel_id", hotelController.getOneHotel);

export default router;
