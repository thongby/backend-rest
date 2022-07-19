const Chwtactic = require('../models/lookups/chwtactic')

exports.list = async (req, res) => {
    try {
      const chwtactic = await Chwtactic.find({}).exec();
      res.send(chwtactic);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };
  
  exports.create = async (req, res) => {
    try {
      console.log(req.body);
      //const { name } = req.body;
      //const category = await new Category({ name }).save();
      const chwtactic = await new Chwtactic(req.body).save();
      res.send(chwtactic);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };
  
  exports.read = async (req, res) => {
    try {
      const id = req.params.id;
      const chwtactic = await Chwtactic.findOne({ _id: id });
      res.send(chwtactic);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const id = req.params.id;
      const { tacticid, tacticname, shorttactic } = req.body;
  
      const tactic = await Chwtactic.findOneAndUpdate(
        { _id: id },
        {tacticid: tacticid, tacticname: tacticname, shorttactic: shorttactic }
      );
      res.send(tactic);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };
  
  exports.remove = async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await Chwtactic.findOneAndDelete({ _id: id });
      res.send(deleted);
    } catch (error) {
      res.status(500).send("Server Error!!");
    }
  };