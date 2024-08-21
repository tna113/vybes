const express = require("express");
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

console.log(app);

app.listen(8080, () => {
    console.log('server listening to port', port);
});

//routes
app.get('/', (req, res) => {
    res.send('hello from our server!');
});