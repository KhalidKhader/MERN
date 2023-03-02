const ProjectManagerController = require('../controllers/ProjectManager.controller');
module.exports = function(app){
    app.get('/api/Projects', ProjectManagerController.index);
    app.post('/api/Project', ProjectManagerController.createProject); 
    app.get('/api/Project', ProjectManagerController.getAllProjects);
    app.get('/api/Project/:id', ProjectManagerController.getProject);
    app.put('/api/Project/:id', ProjectManagerController.updateProject);
    app.delete('/api/Project/:id', ProjectManagerController.deleteProject);
}

