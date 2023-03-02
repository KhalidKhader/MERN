const { Pet } = require('../models/Pet.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPet = (request, response) => {
    const { petName,petType,petDescription,skill1,skill2,skill3 } = request.body;
Pet.create({
    petName,
    petType,
    petDescription,
    skill1,
    skill2,
    skill3,
        
    })
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAlPet = (request, response) => {
    Pet.find({}).sort({createdAt:-1})
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err))
}



module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(Pet => response.json(Pet))
        .catch(err => response.status(400).json(err))
}



module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




