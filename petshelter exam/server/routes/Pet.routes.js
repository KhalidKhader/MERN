const PetController = require('../controllers/Pet.controller');
module.exports = function(app){
    app.get('/api/Pets', PetController.index);
    app.post('/api/Pet', PetController.createPet); 
    app.get('/api/Pet', PetController.getAlPet);
    app.get('/api/Pet/:id', PetController.getPet);
    app.put('/api/Pet/:id', PetController.updatePet);
    app.delete('/api/Pet/:id', PetController.deletePet);
}

