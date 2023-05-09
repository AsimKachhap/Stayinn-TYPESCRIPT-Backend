import { Request, Response } from "express";
import Hotel from "../models/Hotel";

export default {
  getAllHotels: async (req: Request, res: Response) => {
    try {
      const hotels = await Hotel.find();

      res.status(200).json({
        status: "SUCCESS",
        length: hotels.length,
        data: hotels,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },

  addHotel: async (req: Request, res: Response) => {
    try {
      const { name, address, lat, long } = req.body;

      const newHotel = new Hotel({
        name: name,
        address: address,
        location: {
          lat: lat,
          long: long,
        },
      });

      newHotel.save();

      res.status(202).json({
        status: "SUCCESS",
        data: newHotel,
      });
    } catch (error) {
      res.status(500).json({
        status: "FAIL",
        error: error,
      });
    }
  },

  getOneHotel: async (req: Request, res: Response) => {
    try {
      const hotel = await Hotel.findById(req.params.hotel_id);
      res.status(200).json({
        status: "SUCCESS",
        data: hotel,
      });
    } catch (error) {
      res.status(500).json({
        status: "FAIL",
        error: error,
      });
    }
  },
};
