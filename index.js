const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const educations = require('./data/educations.json');

app.get('/', (req, res) => {
    res.send('Education API Running');
});
app.get('/educations-categories', (req, res) => {
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(educations)
    }
    else {
        const category_educations = educations.filter(n => n.category_id === id);
        res.send(category_educations);
    }


})
app.get('/educations/:id', (req, res) => {
    const id = req.params.id;
    const selectededucations = educations.find(n => n._id === id);
    res.send(selectededucations);
})


app.listen(port, () => {
    console.log('Education News Server running on port', port);
})