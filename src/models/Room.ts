import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    enum: ["Standard", "AC", "Delux"],
    default: "Standard",
    require: true,
  },
  noOfBeds: {
    type: Number,
    default: 1,
    require: true,
  },
  capacity: {
    type: Number,
    default: 1,
    require: true,
  },
  rate: {
    type: Number,
    require: true,
  },
  isOccupied: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Room", RoomSchema);
