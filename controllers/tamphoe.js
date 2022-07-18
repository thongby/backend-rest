const Targetamphoe = require("../models/rduprovinces/tamphoe");

// Target amphoe data (CRUD)
exports.createTargetamphoe = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const tamphoe = await new Targetamphoe(req.body).save();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Create Error!!");
  }
};

exports.listTargetamphoe = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const tamphoe = await Targetamphoe.find()
      .limit(count)
      .populate([{ path: "changwats" }, { path: "amphoes" }])
      .sort([["createdAt", "desc"]]);

    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.readTargetamphoe = async (req, res) => {
  try {
    //code
    const tamphoe = await Targetamphoe.findOne({ _id: req.params.id })
      .populate([{ path: "changwats" }, { path: "amphoes" }])
      .exec();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Read Error!!");
  }
};

exports.editTargetamphoe = async (req, res) => {
  try {
    const tamphoe = await Targetamphoe.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Update Error!!!");
  }
};

exports.removeTargetamphoe = async (req, res) => {
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
