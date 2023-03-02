const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); 
require('./server/config/ProjectManager.config');


app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/ProjectManager.routes')(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

