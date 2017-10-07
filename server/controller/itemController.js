const Item = require('../../db/index').fridgeItems;

//functions to add items, get items, and delete items from the database using promises

module.exports = {
  getAllItems: (req, res) => {
    Item.findAll({
      where: {fridgeId: req.params.fridgeId}
    })
    .then((data) => {
      res.send(data); 
    })
    .catch(err => {
      res.status(500).send(err); 
    });
  },

  getItemByType: (req, res) => {
    Item.findAll({
      where: {fridgeId: req.params.fridgeId, type: req.params.type}
    })
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err); 
    });
  },

  addItem: (req, res) => {
    Item.create({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type,
      fridgeId: req.body.fridgeId,
      user: req.body.user
    })
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    }); 
  },

  updateItem: (req, res) => {
    Item.update({
      name: req.body.name,
      quantity: req.body.quantity,
      type: req.body.type
    },
    { where: {id: req.params.id},
      returning: true,
    })
    .then((data) => {
      res.status(202).send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  
  deleteItem: (req, res) => {
    Item.destroy({
      where: {id: req.params.id}
    })
    .then((data) => {
      res.send({id: req.params.id});
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },

  getItemUri: (req, res) => {
    console.log(req.body)
    axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${req.body.item}&app_id=bdb5aced&app_key=0da9ffbe2bd84109f0090e3b1b8d3116`)
    .then((data) => {
      console.log(req.body, 'fuuuuuuuuuuuck')
      res.send(data.data).status(200)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  getNutrients: (req, res) => {
    axios.post('https://api.edamam.com/api/food-database/nutrients?app_id=bdb5aced&app_key=0da9ffbe2bd84109f0090e3b1b8d3116', {
      "yield": 1,
      "ingredients": [
        {
          "quantity": 1,
          "measureURI": req.body.measureURI,
          "foodURI": req.body.foodURI
        }
      ]
    })
    .then((data) => {
      res.send(data.data).send(200)
    })
    .catch((err) => {
      console.log(err)
    })
  }
};