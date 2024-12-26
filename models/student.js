const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password:  {
    type: String,
    require: true
  },
  score: Number,
  nomerAbsen: Number,
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classRoom"
  },
});

const Student = mongoose.model('student', studentSchema)

module.exports = Student;