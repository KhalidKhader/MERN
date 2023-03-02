const mongoose = require('mongoose');
const RateSchema = new mongoose.Schema({
   
  
        Rating: {
            type: Number,
            required:[
                true,
                "Movie Rating Is Required !!"]
        },
        
        yourReview: {
            type: String,
            required:[
                true,
                "Review Id Is Required !!"
            ]
        },

        id: {
            type: String,
            required:[
                true,
                " Id Is Required !!"
            ]
       },
       yourName: {
        type: String,
        required:[
            true,
            "your Name Is Required !!"
        ]
    },
       


}, { timestamps: true });
module.exports.Rate = mongoose.model('Rate', RateSchema);

