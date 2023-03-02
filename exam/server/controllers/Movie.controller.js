const { Movie } = require('../models/Movie.model');
const { Rate } = require('../models/Rate.model');



module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}



module.exports.createMovie = (request, response) => {
    const { yourName,movieTitle,Rating, yourReview} = request.body;
let movie =Movie.create({
   yourName,
   movieTitle,
   Rating,
   yourReview
    }).then( Movie =>{response.json(Movie)
        Rate.create({
            yourName,
            Rating,
            yourReview,
            id:Movie._id
        })
    })
        .catch(err => response.status(400).json(err));
       
}


  


  







module.exports.createReview = (request, response) => {
        const { id,Rating, yourReview,yourName} = request.body;
    Rate.create({
        id,
        Rating,
        yourReview,
        yourName,
        })
            .then(Rate => response.json(Rate))
            .catch(err => response.status(400).json(err));
    }
    
    // module.exports.getAllRates = (request, response) => {
    //     Rate.find({}).sort({createdAt:-1})
    //         .then(Rate => response.json(Rate))
    //         .catch(Rate => response.status(400).json(err))
    // }
    
    module.exports.getRates = (request, response) => {
       // console.log(request.params.id);
       //request.params.id
        Rate.find({id:request.params.id})
            .then(Rate => response.json(Rate))
            .catch(err => response.status(400).json(err))
    }



    

module.exports.getAllMovie = (request, response) => {
    Movie.find({}).sort({createdAt:-1})
        .then(Movie => response.json(Movie))
        .catch(Movie => response.status(400).json(err))
}

module.exports.getMovie = (request, response) => {
    Movie.findOne({id:request.params.id})
        .then(Movie => response.json(Movie))
        .catch(err => response.status(400).json(err))
}



module.exports.updateMovie = (request, response) => {
    Movie.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedMovie => response.json(updatedMovie))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteMovie = (request, response) => {
    Movie.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




