const { Votes } = require('../models/Votes.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createVotes = (request, response) => {
    const { option1,option2,option3,option4,option1Rate,option2Rate,option3Rate,option4Rate,question } = request.body;
Votes.create({
    option1,
    option2,
    option3,
    option4,
    option1Rate,
    option2Rate,
    option3Rate,
    option4Rate,
    question
        
    })
        .then(Votes => response.json(Votes))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllVotes = (request, response) => {
    Votes.find({}).sort({createdAt:-1})
        .then(Votes => response.json(Votes))
        .catch(err => response.status(400).json(err))
}

module.exports.getTopVotes = (request, response) => {
    Votes.find({}).sort({option1Rate:-1,option2Rate:-1,option3Rate:-1,option4Rate:-1})
        .then(Votes => response.json(Votes))
        .catch(err => response.status(400).json(err))
}


module.exports.getVotes = (request, response) => {
    Votes.findOne({_id:request.params.id})
        .then(Votes => response.json(Votes))
        .catch(err => response.status(400).json(err))
}


module.exports.updateVotes = (request, response) => {
    Votes.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedVotes => response.json(updatedVotes))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteVotes = (request, response) => {
    Votes.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




