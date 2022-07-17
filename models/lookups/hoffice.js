const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const hofficeSchema = new mongoose.Schema(
  {
    code5: {
      type: String,
    },
    name_t: {
      type: String,
    },
    sp_level: {
      type: String,
    },
    code9: {
      type: String,
    },
    hofficetype_id: {
      type: ObjectId,
      ref: "healthofficetypes",
    },
    ta_id: {
      type: ObjectId,
      ref: "tambons"
    },
    am_id: {
      type: ObjectId,
      ref: "amphoes"
    },
    ch_id: {
      type: ObjectId,
      ref: "changwats"
    },
    moo_id: {
      type: String,
    },
    tel: {
      type: String,
    },
    fax: {
      type: String,
    },
    postcoe: {
      type: String,
    },
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Hoffice = mongoose.model("healthoffices", hofficeSchema);
