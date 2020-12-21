const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

let comments = [
    {
        username: 'Todd',
        comment: "lol that is so funny!",
        id: uuidv4()
    },
    {
        username: 'Skyler',
        comment: 'I like to go walk with my dog',
        id: uuidv4()
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd',
        id: uuidv4()
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof',
        id: uuidv4()
    }
];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//INDEX
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

//NEW
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

//CREATE
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });
    res.redirect('/comments');
})

//SHOW
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

//EDIT
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

//UPDATE
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');

})

//DELETE
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})





app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are you ${qty} ${meat} tacos!`)
})

app.listen(3000, () => {
    console.log('On Port 3000');
})

