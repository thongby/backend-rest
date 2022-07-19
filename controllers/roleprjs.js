const Roleprj = require("../models/lookups/roleprjs");

exports.list = async (req, res) => {
  try {
    const roleprj = await Roleprj.find({}).exec();
    res.send(roleprj);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    //const { name } = req.body;
    //const category = await new Category({ name }).save();
    const created = await new Roleprj(req.body).save();
    res.send(created);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.read = async (req, res) => {
  try {
    const id = req.params.id;
    const roleprj = await Roleprj.findOne({ _id: id });
    res.send(roleprj);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { role_id, role } = req.body;

    const updated = await Hposition.findOneAndUpdate(
      { _id: id },
      {role_id: role_id, role: role }
    );
    res.send(updated);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};

exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Roleprj.findOneAndDelete({ _id: id });
    res.send(deleted);
  } catch (error) {
    res.status(500).send("Server Error!!");
  }
};
