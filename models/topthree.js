const { model, Schema } = require("mongoose");

const topThreeSchema = Schema({
 _id: String,
 totalPoints: Number
  }
);
const TopThree = model("TopThree", topThreeSchema);

module.exports = TopThree;