const mongoose = require("mongoose");
const { Schema } = mongoose;

const classRoomSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    lantai: Number,
})

const ClassRoom = mongoose.model("classRoom", classRoomSchema);
module.exports = ClassRoom;