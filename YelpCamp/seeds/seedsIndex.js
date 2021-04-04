const Campground = require('../models/campground');
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection; //Making a shorthand
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 350; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            price,
            geometry: {
                "type": "Point",
                "coordinates": [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            author: '60586511ed8bf303510e7416',  //jiwankim
            images: [{
                url:
                    'https://res.cloudinary.com/dwu65dhp2/image/upload/v1617005704/YelpCamp/hpqvoqo2lhsugo4cniii.jpg',
                filename: 'YelpCamp/p09r7sbgnpecqplzcwpt'
            },
            {
                url:
                    'https://res.cloudinary.com/dwu65dhp2/image/upload/v1617005703/YelpCamp/fsb8uvsj098xlril2syi.jpg',
                filename: 'YelpCamp/lvnjvexvw0pugvhmwhis'
            }],
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus nam placeat iste, suscipit, voluptates quisquam distinctio, quidem delectus non quod voluptatem labore maxime eius alias laudantium porro nesciunt vel.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus nam placeat iste, suscipit, voluptates quisquam distinctio, quidem delectus non quod voluptatem labore maxime eius alias laudantium porro nesciunt vel.'
        })
        await camp.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})