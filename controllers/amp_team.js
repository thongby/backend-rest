const Ampteam = require("../models/rduprovinces/amp_team");

// RDU amphoe team (CRUD)
exports.createAmpteam = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const ampteam = await new Ampteam(req.body).save();
    res.send(ampteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Create Error!!");
  }
};

exports.listAmpteam = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const ampteam = await Ampteam.find()
      .limit(count)
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "healthoffices" },
      ])
      .sort([["createdAt", "desc"]]);

    res.send(ampteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.readAmpteam = async (req, res) => {
  try {
    //code
    const ampteam = await Ampteam.findOne({ _id: req.params.id })
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "healthoffices" },
      ])
      .exec();
    res.send(ampteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Read Error!!");
  }
};

exports.editAmpteam = async (req, res) => {
  try {
    const ampteam = await Ampteam.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(ampteam);
  } catch (error) {
    console.log(error);
    res.status(500).send("Update Error!!!");
  }
};

exports.removeAmpteam = async (req, res) => {
  try {
    const deleted = await Ampteam.findOneAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Remove Error!!!");
  }
};
