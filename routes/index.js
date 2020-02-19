var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.post('/', async (req, res, next)=> {
  var newssection =   req.body.newssection
  var category =   req.body.category
  var date =   req.body.date
  var channel =   req.body.channel
    let newsdata  = await axios({
      method: 'get',
      url: `http://newsapi.org/v2/${newssection}?` +
      `q=${channel}&` +
      `from=${date}&` +
      `category = ${{category}}`+
      'sortBy=popularity&' +
      'apiKey=45567ae266194ca5a93790bdd5218aad'})
      let alldata = newsdata.data.articles
       res.render('index',{alldata:alldata})
  })

module.exports = router;
