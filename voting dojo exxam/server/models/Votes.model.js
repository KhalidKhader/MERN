const mongoose = require('mongoose');
const VotersSchema = new mongoose.Schema({
    option1: { type: String,
        required:[
            true,
            "option1 Is Required !!"
        ]
    
    },
    option2: { type: String,
        required:[
            true,
            "option1 Is Required !!"
        ]
    },
    option3: { type: String},
    option4: { type: String },
    option1Rate: { type: Number},
    option2Rate: { type: Number},
    option3Rate: { type: Number },
    option4Rate: { type: Number },
    question: { type: String ,
        required:[
            true,
            "Question Is Required !!"
        ]
    },


}, { timestamps: true });
module.exports.Votes = mongoose.model('Votes', VotersSchema);

