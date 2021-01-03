const mongoose = require('mongoose');

//connect method returns a promise.
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected");
    }).catch(e => {
        console.log("ERROR");
        console.error(e);
    })


//create a Schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    year: Number,
    rating: String,
    score: Number,
});


//create a model with the Schema
//arg1 should start with a capital letter and be singular noun
//arg2 is Schema
//variable name is the same as arg1
const Movie = mongoose.model('Movie', movieSchema);


//creating a movie object and saving it to the DB
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
amadeus.save();


//creating many movie objects and saving it to the DB
//no need for save() method
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.4, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' }
]);




//another schema : product
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    qty: {
        online: {
            type: Number,
            required: true,
            min: 0
        },
        inStore: {
            type: Number,
            default: 0,
            min: 0
        }
    }
})

//model
const Product = mongoose.model('Product', productSchema);

//object
const laptop = new Product({
    name: "laptop",
    price: 1033.90,
    qty: {
        online: 12,
        inStore: 2
    }
})
