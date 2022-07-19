const Chwprofile = require("../models/rduprovinces/chwprofile");

// RDU changwat data
// Changwat profile data (RU)
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const chwprofile = await new Chwprofile(req.body).save();
    res.send(chwprofile);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.list = async (req, res) => {
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

exports.read = async (req, res) => {
  try {
    //code
    const chwprofile = await Chwprofile.findOne({ _id: req.params.id })
      .populate("changwats")
      .exec();
    res.send(chwprofile);
  } catch (error) {
    //err
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
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
    res.status(500).send("Server Error!!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Chwprofile.findOneAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};
