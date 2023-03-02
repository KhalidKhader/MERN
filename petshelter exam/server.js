const express = require('express');
const cors = require('cors');
const app = express();
// //const app2=express();
// require('./server/config/mongoose.config'); // This is new
// require('./server/config/myData.config');
// require('./server/config/Players.config');
// require('./server/config/Pirate.config');
// require('./server/config/ProjectManager.config');
// require('./server/config/Votes.config');
require('./server/config/mongoose.config');




app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
// require('./server/routes/person.routes')(app);
// require('./server/routes/signUp.routes')(app);
// require('./server/routes/Players.routes')(app);
// require('./server/routes/Pirate.routes')(app);
// require('./server/routes/ProjectManager.routes')(app);
// require('./server/routes/Votes.routes')(app);
require('./server/routes/Pet.routes')(app);




app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

