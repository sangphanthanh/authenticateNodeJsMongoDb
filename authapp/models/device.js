const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    Mac:        {type: String, require: true},
    ChipSerial: {type: String, require: true},
    IsActive:   {type: Boolean,require: true},
    QRString:   {type: String, require: true},
    ClockID:    {type: Number, require: true},
    ClockStatus:{type: Boolean,require: true},
    ClockDescription:{type:String, require:false},
    DoorID:     {type: Number, require: true},
    DoorStatus: {type: Boolean,require: true},
    DoorDescription:{type:String, require:false},
    UserID:     {type: String, require: true},
});

const Device = module.exports = mongoose.model('device',DeviceSchema);