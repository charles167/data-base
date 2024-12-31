const express = require("express");
const StudentRoute = express.Router();
const StudentModel = require("../Module/StudentModel");

// Route to add a staff member
StudentRoute.post("/staff", async (req, res) => {
  try {
    const { name, Staff_Role, entry_date, Staff_status, college } = req.body;
    const AddStaff = await StudentModel.create({
      name,
      Staff_Role,
      entry_date,
      Staff_status,
      college,
    });
    res.status(201).send({
      success: true,
      msg: "Staff added successfully",
      AddStaff,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error creating staff",
      error: error.message,
    });
  }
});

// Route to get a single staff member by ID
StudentRoute.get("/staff/singleStaff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getStaff = await StudentModel.findById(id);
    if (getStaff) {
      res.send({
        success: true,
        msg: "Staff retrieved successfully",
        getStaff,
      });
    } else {
      res.status(404).send({ success: false, msg: "Staff not found" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error retrieving staff",
      error: error.message,
    });
  }
});

// Route to get all staff members
StudentRoute.get("/allstaff", async (req, res) => {
  try {
    const getAllStaff = await StudentModel.find();
    res.send({
      success: true,
      msg: "All staff retrieved successfully",
      getAllStaff,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error retrieving staff",
      error: error.message,
    });
  }
});

// Route to delete a staff member by ID
StudentRoute.delete("/staff/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStaff = await StudentModel.findByIdAndDelete(id);
    if (deleteStaff) {
      res.send({
        success: true,
        msg: "Staff deleted successfully",
      });
    } else {
      res.status(404).send({ success: false, msg: "Staff not found" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error deleting staff",
      error: error.message,
    });
  }
});

// Route to update a staff member by ID
StudentRoute.put("/staff/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const EditStaff = await StudentModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (EditStaff) {
      res.send({
        success: true,
        msg: "Staff updated successfully",
        EditStaff,
      });
    } else {
      res.status(404).send({
        success: false,
        msg: "Staff not found",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      msg: "Error updating staff",
      error: error.message,
    });
  }
});

module.exports = StudentRoute;
