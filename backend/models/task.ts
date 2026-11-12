import mongoose from "mongoose";
const Schema = mongoose.Schema; //create new schema instance
const taskSchema = new Schema({
  //create a custome schema for task
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Task", taskSchema, "task"); //export the schema as a model
