const mongoose = require('mongoose');
const ProjectManager = new mongoose.Schema({
    ProjectName: { type: String,
        required:[
            true,
            "ProjectName Is Required !!"
        ]
    
    },
    ProjectDate: { type: String,
        required:[
            true,
            "ProjectDate Is Required !!"
        ]
    },
    ProjectStatus: { type: Boolean},
    ProjectDateStatus:{type:String},
   

}, { timestamps: true });
module.exports.ProjectManager = mongoose.model('ProjectManager', ProjectManager);

