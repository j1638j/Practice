const franc = require('franc');
const langs = require('langs');
const langSample = process.argv[2];

//const language = JSON.parse(langs.where("3", franc(langSample))).name;
const language = langs.where("3", franc(langSample)).name;


console.log(`The language you are looking for is ${language}`);


