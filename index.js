const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Education API Running');
});
app.get('/educations-categories', (req, res) => {
    res.send(categories);
})
app.listen(port, () => {
    console.log('Education News Server running on port', port);
})