const Tgroceries = require("../models/rduprovinces/tgroceries");

// Target groceries data (CRUD)
exports.createTgroceries = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const tgroceries = await new Tgroceries(req.body).save();
    res.send(tgroceries);
  } catch (error) {
    console.log(error);
    res.status(500).send("Create Error!!");
  }
};

exports.listTgroceries = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const tgroceries = await Tgroceries.find()
      .limit(count)
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "tambons" },
      ])
      .sort([["createdAt", "desc"]]);

    res.send(tgroceries);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.readTgroceries = async (req, res) => {
  try {
    //code
    const tgroceries = await Tgroceries.findOne({ _id: req.params.id })
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "tambons" },
      ])
      .exec();
    res.send(groceries);
  } catch (error) {
    console.log(error);
    res.status(500).send("Read Error!!");
  }
};

exports.editTgroceries = async (req, res) => {
  try {
    const tgroceries = await Tgroceries.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(tgroceries);
  } catch (error) {
    console.log(error);
    res.status(500).send("Update Error!!!");
  }
};

exports.removeTgroceries = async (req, res) => {
  try {
    const deleted = await Tgroceries.findOneAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Remove Error!!!");
  }
};

// Develop groceries data

// Evaluate groceries
