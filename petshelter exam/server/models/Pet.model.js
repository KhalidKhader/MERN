const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: { type: String,
        required:[
            true,
            "Pet Name Is Required !!"
        ]
    
    },
    petType: { type: String,
        required:[
            true,
            "Pet Type Is Required !!"
        ]
    },
    petDescription: { type: String,
        
        required:[
            true,
            "Pet Description Is Required !!"
        ]
    },
    skill1: { type: String},
    skill2: { type: String },
    skill3: { type: String},
    


}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);

