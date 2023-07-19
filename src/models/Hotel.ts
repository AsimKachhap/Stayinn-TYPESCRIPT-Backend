import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Enter Hotel Name"],
      unique: true,
    },
    address: {
      type: String,
      require: [true, "Please enter Address"],
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
        require: [true, "Please enter longitiude of your Hotel"],
        unique: true,
      },
    },
    displayPicture: {
      type: String,
      require: [true, "Please select a Display Picture for Hotels."],
      default: "https://icons8.com/icon/MKUgHdoN85qd/hotel",
    },

    pictures: {
      type: [String],
    },

    rooms: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Room",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", HotelSchema);
