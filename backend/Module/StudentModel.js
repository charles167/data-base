const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Staff_Role: {
      type: String,
      required: true,
    },
    entry_date: {
      type: String,
      required: true,
    },
    Staff_status: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.model("unistaff", StudentSchema);
module.exports = StudentModel;
