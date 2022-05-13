const express = require('express')
const app = express()
const pokemonOne = require('./data/pokemonOne.json')
const pokemonTwo = require('./data/pokemonTwo.json')
const pokemon30 = require('./data/30_pokemon.json')
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, function (err) {
    if (err) console.log(err);
})

app.get("/api/v2/pokemon/1", (req, res) => {
    res.send(pokemonOne);
});

app.get("/api/v2/pokemon/2", (req, res) => {
    res.send(pokemonTwo);
});

app.get("/api/v2/pokemon/venusaur", (req, res) => {
    res.send(pokemonOne);
});

app.get("/api/v2/pokemon/charizard", (req, res) => {
    res.send(pokemonTwo);
});


app.get("/api/v2/pokemon/ability/:id", (req, res) => {
    res.send(pokemon30);
});

app.get("/api/v2/pokemon/type/:id", (req, res) => {
    res.send(pokemon30);
});

