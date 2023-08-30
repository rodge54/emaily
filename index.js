const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi:'there'});
});

// PORT will either be what Heroku assigns in production ||(or) 5000 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);