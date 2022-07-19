const Hposition = require("../models/lookups/hpositions");

exports.list = async (req, res) => {
  try {
    const hpositions = await Hposition.find({}).exec();
    res.send(hpositions);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    //const { name } = req.body;
    //const category = await new Category({ name }).save();
    const hposition = await new Hposition(req.body).save();
    res.send(hposition);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const hposition = await Hposition.findOne({ _id: id });
    res.send(hposition);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { hposition_id, hposition } = req.body;

    const hpos = await Hposition.findOneAndUpdate(
      { _id: id },
      {hposition_id: hposition_id, hposition: hposition }
    );
    res.send(hpos);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Hposition.findOneAndDelete({ _id: id });
    res.send(deleted);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};
