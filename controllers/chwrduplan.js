const Chwrduplan = require("../models/rduprovinces/chwrduplan");

exports.create = async (req, res) => {
    try {
      console.log(req.body);
      // const { name } = req.body;
      const created = await new Chwrduplan(req.body).save();
      res.send(created);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };
  
  exports.list = async (req, res) => {
    try {
      const count = parseInt(req.params.count);
  
      const chwrduplan = await Chwrduplan.find()
        .limit(count)
        .populate("changwats")
        .sort([["createdAt", "desc"]]);
  
      res.send(chwrduplan);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
    }
  };
  
  exports.read = async (req, res) => {
      try {
        //code
        const chwrduplan = await Chwrduplan.findOne({ _id: req.params.id })
          .populate("changwats")
          .exec();
        res.send(chwrduplan);
      } catch (error) {
        console.log(error);
        res.status(500).send("Server Error!!");
      }
    };
    
  
  exports.edit = async (req, res) => {
    try {
      //code
      const chwrduplan = await Chwrduplan.findOneAndUpdate(
          { _id: req.params.id },
          req.body,
          { new: true }
        ).exec();
        res.send(chwrduplan);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!!!");
    }
  };
  
  exports.removeChwprofile = async (req, res) => {
      try {
        const deleted = await Chwrduplan.findOneAndRemove({
          _id: req.params.id,
        }).exec();
    
        res.send(deleted);
      } catch (error) {
        res.status(500).send("Remove Error!!");
      }
    };