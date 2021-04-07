const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bands: { type: [String], required: true, default: undefined },
  instrument: { type: String, required: true },
  albums: {type: [{
    title: {type:String, required: true},
    year: {type: Number, required:true}
}], required:true, default: undefined},
  birthday: Date,
}, {
    timestamps:true,
    versionKey: false
});

const User = model("User", UserSchema);

module.exports = User;
