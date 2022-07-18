const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tamphoeSchema = new mongoose.Schema(
  {
    chw_id: {
      type: ObjectID,
      ref: "changwats",
    },
    amphoe_id: {
      type: ObjectId,
      ref: "amphoes",
    },
    year: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Targetamphoe = mongoose.model("tamphoes", tamphoeSchema);
