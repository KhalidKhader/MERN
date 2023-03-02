const { Pirate } = require('../models/Pirate.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPirate = (request, response) => {
    const { PirateName,ImageUrl,NumberOfCheets,PirateCatchPhase,CrewPosition,PegLeg,EyePatch,HookHand } = request.body;
Pirate.create({
        PirateName,
        ImageUrl,
        NumberOfCheets,
        PirateCatchPhase,
        CrewPosition,
        PegLeg,
        EyePatch,
        HookHand
        
    })
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPirate = (request, response) => {
    Pirate.find({})
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(Pirate => response.json(Pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




