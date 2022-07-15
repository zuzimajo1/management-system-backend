const db = require("../models")
const Events = db.events;
const { Op } = require("sequelize");


//create Event

const EventCreation = async (req, res)=>{
    try {
        const createEvent = await Events.create(req.body);
        res.status(200).json(createEvent);
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get All Event

const EventGetAll = async (req, res)=>{
    try {
        const getallevent = await Events.findAll();
        res.status(200).json(getallevent)
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { EventCreation, EventGetAll };