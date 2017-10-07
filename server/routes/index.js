const router = require('express').Router();
const messages = require('../controller/messageController');
const fridge = require('../controller/fridgeController');
const item = require('../controller/itemController');
const search = require('../controller/searchController');

// Messages Routes
router.get('/allMessages/:id', messages.getMessages);
router.post('/allMessages', messages.postMessages);
router.delete('/allMessages/:messageId', messages.deleteMessages);
router.patch('/allMessages/:id', messages.updateMessages);

// Fridge Routes
router.post('/fridge', fridge.addFridge);
router.get('/fridge/:name', fridge.getFridge);
router.delete('/fridge/:fridgeId', fridge.deleteFridge);

// Items Routes
router.get('/items/:fridgeId', item.getAllItems);
router.get('items/:fridgeId/:type', item.getItemByType);
router.post('/items', item.addItem);
router.patch('/items/:id', item.updateItem);
router.delete('/items/:id', item.deleteItem);

// Search Routes
router.route('/search')
  .put(search.getRecipes);

router.post('/uri/items', item.getItemUri);
router.post('/nutrients', item.getNutrients);


module.exports = router;