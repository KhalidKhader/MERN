const PirateController = require('../controllers/Pirate.controller');
module.exports = function(app){
    app.get('/api/Pirates', PirateController.index);
    app.post('/api/Pirate', PirateController.createPirate); 
    app.get('/api/Pirate', PirateController.getAllPirate);
    app.get('/api/Pirate/:id', PirateController.getPirate);
    app.put('/api/Pirate/:id', PirateController.updatePirate);
    app.delete('/api/Pirate/:id', PirateController.deletePirate);
}

