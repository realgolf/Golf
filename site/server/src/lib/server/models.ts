import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
  user: {
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    measurement_units: { type: String, required: true, default: "meters" },
    theme: { type: String, required: true, default: "system" },
  },
  games: [
    {
      id: { type: String },
      name: { type: String },
      teams: { type: String },
      date: { type: String },
      data: { type: String },
    },
  ],
});

export const User_Model = mongoose.model("User", User_Schema);
