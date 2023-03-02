const { SignUp } = require('../models/SignUp.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createSignUp = (request, response) => {
    const { FirstName,LastName,Email,Password } = request.body;
SignUp.create({
    FirstName,
    LastName,
    Email,
    Password
        
    })
        .then(SignUp => response.json(SignUp))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPeople = (request, response) => {
    SignUp.find({})
        .then(SignUp => response.json(SignUp))
        .catch(err => response.status(400).json(err))
}

module.exports.getSignUp = (request, response) => {
    SignUp.findOne({_id:request.params.id})
        .then(SignUp => response.json(SignUp))
        .catch(err => response.status(400).json(err))
}

module.exports.updateSignUp = (request, response) => {
    SignUp.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedSignUp => response.json(updatedSignUp))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteSignUp = (request, response) => {
    SignUp.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




