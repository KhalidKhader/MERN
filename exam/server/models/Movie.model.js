const mongoose = require('mongoose');


// const RateSchema = new mongoose.Schema({
   
  
//     Rating: {
//         type: Number,
//         required:[
//             true,
//             "Movie Rating Is Required !!"]
//     },
    
//     yourReview: {
//         type: String,
//         required:[
//             true,
//             "Review Type Is Required !!"
//         ]
//     },
// //     movieId: {
// //         type: mongoose.Types.ObjectId,
// //         ref: "Movie"
// //    }
   


// }, { timestamps: true });



const MovieSchema = new mongoose.Schema({
    yourName: { type: String,
        required:[
            true,
            "Your Name Is Required !!"
        ]
    
    },
    movieTitle: { type: String,
        required:[
            true,
            "Movie Title Is Required !!"
        ]
    },


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
            "Review Type Is Required !!"
        ]
    },
   

}, { timestamps: true });

module.exports.Movie = mongoose.model('Movie', MovieSchema);

