const Hoffice = require("../models/lookups/hoffice");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    // const { name } = req.body;
    const created = await new Hoffice(req.body).save();
    res.send(created);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!");
  }
};

exports.list = async (req, res) => {
  try {
    const count = parseInt(req.params.count);

    const hoffice = await Hoffice.find()
      .limit(count)
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "tambons" },
        { path: "healthofficetypes" },
      ])
      .sort([["createdAt", "desc"]]);

    res.send(hoffice);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.read = async (req, res) => {
  try {
    //code
    const hoffice = await Hoffice.findOne({ _id: req.params.id })
      .populate([
        { path: "changwats" },
        { path: "amphoes" },
        { path: "tambons" },
        { path: "healthofficetypes" },
      ])
      .exec();
    res.send(hoffice);
  } catch (error) {
    //err
    console.log(error);
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const hoffice = await Hoffice.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    ).exec();
    res.send(hoffice);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Hoffice.findOneAndRemove({
      _id: req.params.id,
    }).exec();

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!!!");
  }
};
