const db = require("../models");
const Resident = db.residents;
const { Op } = require("sequelize");

const ResidentProfiling = async (req, res) => {
  try {
    const createProfiling = await Resident.create(req.body);
    res.status(200).json(createProfiling);
  } catch (err) {
    res.status(500).json(err);
  }
};

const FindAllResident = async (req, res) => {
  try {
    const findAllresidents = await Resident.findAll();
    res.status(200).json(findAllresidents);
  } catch (err) {
    res.status(500).json(err);
  }
};

const UpdateResident = async (req, res) => {
  const ID = req.query.id;
  const newbody = req.body;
  try {
    const UpdateResident = await Resident.update(newbody, {
      where: {
        id: ID,
      },
    });
    res.status(200).json(newbody); //to get the update data
  } catch (err) {
    res.status(500).json(err);
  }
};

const DeleteResident = async (req, res) => {
  try {
    const deleteResident = await Resident.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteResident);
  } catch (err) {
    res.status(500).json(err);
  }
};


const FindSingleResident = async (req, res) => {
  try {
    const finddata = await Resident.findOne({
      where: {
           fullname: req.query.fullname
      }
    });
    res.status(200).json(finddata);
  } catch (error) {
    res.status(500).json(error);
  }
};



module.exports = {
  ResidentProfiling,
  FindAllResident,
  UpdateResident,
  DeleteResident,
  FindSingleResident,
};
