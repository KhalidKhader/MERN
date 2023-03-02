const { ProjectManager } = require('../models/ProjectManager.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProject = (request, response) => {
    const {ProjectName,ProjectDate,ProjectDateStatus } = request.body;
ProjectManager.create({
        ProjectName,
        ProjectDate,
        ProjectDateStatus,
    })
        .then(ProjectManager => response.json(ProjectManager))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProjects = (request, response) => {
    ProjectManager.find({}).sort({ProjectDate:1})
        .then(ProjectManager => response.json(ProjectManager))
        .catch(err => response.status(400).json(err))
}

module.exports.getProject = (request, response) => {
    ProjectManager.findOne({_id:request.params.id})
        .then(ProjectManager => response.json(ProjectManager))
        .catch(err => response.status(400).json(err))
}

module.exports.updateProject = (request, response) => {
    ProjectManager.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteProject = (request, response) => {
    ProjectManager.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}




