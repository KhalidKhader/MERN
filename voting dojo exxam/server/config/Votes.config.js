const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/voters.polls", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database voters"))
    .catch(err => console.log("Something went wrong when connecting to the database voters", err));

