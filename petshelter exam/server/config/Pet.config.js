const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/pets.pet", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database pets"))
    .catch(err => console.log("Something went wrong when connecting to the database pets", err));

