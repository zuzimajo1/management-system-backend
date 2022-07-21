const db = require("../models")
const Events = db.events;
const { Op } = require("sequelize");
const dayjs = require("dayjs");
const date = new Date();


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

//Delete Single Event

const DeleteEvent = async (req, res)=>{
    try {
        const deleteevent = await Events.destroy({
            where:{
                id: req.params.id,
            },
        });
        res.status(200).json(deleteevent)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Find Single Event

const FindSingleEvent = async (req, res)=>{
    try{
        const findevent = await Events.findOne({
          where: {
            //start and end must be both correct to get the data
            [Op.and]: [
              {
                //the start must be least than or equal to today's date
                start: {
                  [Op.lte]: dayjs(date).format("YYYY-MM-DD"),
                },
              },
              {
                //the end must be greater than to today's date
                end: {
                  [Op.gt]: dayjs(date).format("YYYY-MM-DD"),
                },
              },
            ],
          },
        });
        res.status(200).json(findevent)
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = { EventCreation, EventGetAll, DeleteEvent, FindSingleEvent };