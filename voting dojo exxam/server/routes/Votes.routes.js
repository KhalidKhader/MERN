const votesController = require('../controllers/Votes.controller');
module.exports = function(app){
    app.get('/api/Votes', votesController.index);
    app.get('/api/Votes/Top', votesController.getTopVotes);
    app.post('/api/Vote', votesController.createVotes); 
    app.get('/api/Vote', votesController.getAllVotes);
    app.get('/api/Vote/:id', votesController.getVotes);
    app.put('/api/Vote/:id', votesController.updateVotes);
    app.delete('/api/Vote/:id', votesController.deleteVotes);
}

