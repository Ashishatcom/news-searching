const express = require('express');
const router = express.Router();
const axios = require('axios')




router.get('/', async (req, res, next)=> {

  let newsdata  = await axios({
    method: 'get',
    url: 'http://newsapi.org/v2/everything?' +
    'q=the-times-of-india&' +
    'from=2020-02-17&' +
    'category = all'+
    'sortBy=popularity&' +
    'apiKey=45567ae266194ca5a93790bdd5218aad'})
    let alldata = newsdata.data.articles
    res.render('news',{alldata:alldata})
})




module.exports = router;
