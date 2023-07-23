var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form-example', { title: 'Form Example' });
});

/* POST to / page. */
router.post('/', (req, res) => {

  try {
    res.json({ message: 'Success', user: req.body.userInput });
  }
  catch (e) {
    res.render('form-example', { title: req.body.userInput });
  }

});

module.exports = router;
