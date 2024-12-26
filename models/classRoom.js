const mongoose = require("mongoose");
const { Schema } = mongoose;

const classRoomSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    lantai: Number,
})

const ClassRoom = mongoose.model("classRoom", classRoomSchema);
module.exports = ClassRoom;