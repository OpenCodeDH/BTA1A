const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    image: { type: String},
    date: { type: Date },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;