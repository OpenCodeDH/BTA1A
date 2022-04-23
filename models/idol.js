const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdolSchema = new Schema({
    id: { type: Number},
    name: { type: String},
    gender: { type: String},
    date: { type: String},
    link: { type: String},
    img: { type: String},
    qq: { type: String},
    major: { type: String},
    love: { type: String},
    link_love: { type: String}
  });
const Idol = mongoose.model('Idol', IdolSchema)

module.exports = Idol;