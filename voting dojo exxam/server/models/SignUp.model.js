const mongoose = require('mongoose');
const SignUpSchema = new mongoose.Schema({
    FirstName: { type: String,
        required:[
            true,
            "FirstName Is Required !!"
        ]
    
    },
    LastName: { type: Number,
        required:[
            true,
            "LastName Is Required !!"
        ]
    },
    Email: { type: String,
        required:[
            true,
            "Email Is Required !!"
        ]
    },
    Password: { type: String ,
        required:[
            true,
            "Password Is Required !!"
        ]
    },


}, { timestamps: true });
module.exports.SignUp = mongoose.model('SignUp', SignUpSchema);

