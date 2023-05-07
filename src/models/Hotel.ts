import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Hotel Name"],
      unique: true,
    },
    addresss: {
      type: String,
      required: [true, "Please enter Address"],
      unique: true,
    },
    location: {
      lat: {
        type: Number,
        required: [true, "Please enter lattitude of your Hotel"],
        unique: true,
      },
      long: {
        type: Number,
        required: [true, "Please enter longitiude of your Hotel"],
        unique: true,
      },
    },
    displayPicture: {
      type: String,
      required: [true, "Please select a Display Picture for Hotels."],
      default: "https://icons8.com/icon/MKUgHdoN85qd/hotel",
    },

    pictures: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
