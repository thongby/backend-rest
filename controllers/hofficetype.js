const Hofficcetype = require("../models/lookups/hofficetype");

exports.list = async (req, res) => {
  try {
    const hofficetype = await Hofficetype.find({}).exec();
    res.send(hofficetype);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    //const { name } = req.body;
    //const category = await new Category({ name }).save();
    const hofficetype = await new Hofficetype(req.body).save();
    res.send(hofficetype);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const hofficetype = await Hofficetype.findOne({ _id: id });
    res.send(hofficetype);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { hofficetype_id, hofficetype } = req.body;

    const updated = await Hposition.findOneAndUpdate(
      { _id: id },
      {hofficetype_id: hofficetype_id, hofficetype: hofficetype }
    );
    res.send(updated);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Hofficcetype.findOneAndDelete({ _id: id });
    res.send(deleted);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};
