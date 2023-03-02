const mongoose = require('mongoose');
const Pirate = new mongoose.Schema({
    PirateName: { type: String,
        required:[
            true,
            "PirateName Is Required !!"
        ]
    
    },
    ImageUrl: { type: String,
        required:[
            true,
            "ImageUrl Is Required !!"
        ]
    },
    NumberOfCheets: { type: Number,
        required:[
            true,
            "Number Of Cheets Is Required !!"
        ]
    
    },
    PirateCatchPhase: { type: String,
        required:[
            true,
            "Pirate Catch Phase Is Required !!"
        ]
    },
    CrewPosition: { type: String,
        required:[
            true,
            "Crew Position Is Required !!"
        ]
    
    },
    PegLeg: { type: Boolean},
    EyePatch: { type: Boolean},
    HookHand: { type: Boolean},

}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', Pirate);

