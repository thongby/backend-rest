const Chwteam = require("../models/rduprovinces/chw_team");

// RDU changwat team (CRUD)
exports.createChwteam = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const chwteam = await new Chwteam(req.body).save();
    res.send(chwteam);
  } catch (error) {
    res.status(500).send("Create Error!!");
  }
};

exports.listChwteam = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const chwteam = await Chwteam.find()
      .limit(count)
      .populate([{ path: "changwats" }, { path: "healthoffices" }])
      .sort([["createdAt", "desc"]]);

    res.send(chwteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.readChwteam = async (req, res) => {
  try {
    //code
    const chwteam = await Chwteam.findOne({ _id: req.params.id })
      .populate([{ path: "changwats" }, { path: "healthoffices" }])
      .exec();
    res.send(chwteam);
  } catch (error) {
    //err
    console.log(error);
    res.status(500).send("Read Error!!");
  }
};

exports.editChwteam = async (req, res) => {
  try {
    const chwteam = await Chwteam.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(chwteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Update Error!!!");
  }
};

exports.removeChwteam = async (req, res) => {
  try {
    const deleted = await Chwteam.findOneAndRemove({
        _id: req.params.id,
      }).exec();
  
      res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Remove Error!!!");
  }
};
