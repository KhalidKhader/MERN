const MovieController =require('../controllers/Movie.controller')
 //require('../controllers/Movie.controller');
module.exports = function(app){
    app.get('/api/Movies', MovieController.index);
    app.post('/api/Movie', MovieController.createMovie); 
    app.get('/api/Movie', MovieController.getAllMovie);
    app.get('/api/Movie/:id', MovieController.getMovie);
    app.put('/api/Movie/:id', MovieController.updateMovie);
    app.delete('/api/Movie/:id', MovieController.deleteMovie);
   // app.get('/api/Rate/:id', MovieController.getRates);
    app.post('/api/Rate', MovieController.createReview); 
   // app.get('/api/Rate', MovieController.getAllRates);
    app.get('/api/Rate/:id', MovieController.getRates);
}

