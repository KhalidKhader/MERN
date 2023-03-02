const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/players.players_position", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database Pirate database"))
    .catch(err => console.log("Something went wrong when connecting to the database Pirate database", err));

