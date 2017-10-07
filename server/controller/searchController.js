const unirest = require('unirest');
require('dotenv').config();

// EXAMPLE DATA
const temp = require('../../db/seed/recipeDummy.json');

const search = {
  getRecipes: (req, res) => {
    let ingredients = req.body.data.ingredients;
    console.log('THESE ARE INGREDIENTS: ', req.body.data.ingredients)
    // Implements example recipe data
    res.status(200).send(temp.data);

    // Uncomment this to use API
    // unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients"
    //               + "?ingredients=" + ingredients.join(',') + '&fillIngredients=false'
    //               + "&limitLicense=false" + "&number=9" + "&ranking=1")
    //         .header("X-Mashape-Key", process.env.API_FOOD_KEY)
    //         .header("Accept", "application/json")
    //         .end((result) => {
    //           console.log('Headers: ', result.headers);
    //           res.send(result.body);
    //         });
  },
};

module.exports = search;