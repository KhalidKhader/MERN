const signUpController = require('../controllers/SignUp.controller');
module.exports = function(app){
    app.get('/api/sign', signUpController.index);
    app.post('/api/signUp', signUpController.createSignUp); 
    app.get('/api/signUp', signUpController.getAllPeople);
    app.get('/api/signUp/:id', signUpController.getSignUp);
    app.put('/api/signUp/:id', signUpController.updateSignUp);
    app.delete('/api/signUp/:id', signUpController.deleteSignUp);
}

