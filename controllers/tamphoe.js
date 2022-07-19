const Targetamphoe = require("../models/rduprovinces/tamphoe");

// Target amphoe data (CRUD)
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const tamphoe = await new Targetamphoe(req.body).save();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!");
  }
};

exports.list = async (req, res) => {
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

exports.read = async (req, res) => {
  try {
    //code
    const tamphoe = await Targetamphoe.findOne({ _id: req.params.id })
      .populate([{ path: "changwats" }, { path: "amphoes" }])
      .exec();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const tamphoe = await Targetamphoe.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(tamphoe);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Targetamphoe.findOneAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};
