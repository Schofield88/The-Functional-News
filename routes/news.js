const express = require('express');

const router = express.Router();
const news = require('../controllers/newsController');

/* GET the news. */
router.get('/', news.thisIsTheNews);

module.exports = router;
