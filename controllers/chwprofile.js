const Chwprofile = require("../models/rduprovinces/chwprofile");

// RDU changwat data
// Changwat profile data (RU)
exports.createChwprofile = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const product = await new Chwprofile(req.body).save();
    res.send(Chwprofile);
  } catch (error) {
    res.status(500).send("Create Error!!");
  }
};

exports.listChwprofile = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const chwprofile = await Chwprofile.find()
      .limit(count)
      .populate("changwats")
      .sort([["createdAt", "desc"]]);

    res.send(chwprofile);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.readChwprofile = async (req, res) => {
    try {
      //code
      const chwprofile = await Chwprofile.findOne({ _id: req.params.id })
        .populate("changwats")
        .exec();
      res.send(chwprofile);
    } catch (error) {
      //err
      res.status(500).send("Read Error!!");
    }
  };
  

exports.editChwprofile = async (req, res) => {
  try {
    //code
    const chwprofile = await Chwprofile.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      ).exec();
      res.send(chwprofile);
  } catch (error) {
    console.log(error);
    res.status(500).send("Update Error!!!");
  }
};

exports.removeChwprofile = async (req, res) => {
    try {
      const deleted = await Chwprofile.findOneAndRemove({
        _id: req.params.id,
      }).exec();
  
      res.send(deleted);
    } catch (error) {
      res.status(500).send("Remove Error!!");
    }
  };