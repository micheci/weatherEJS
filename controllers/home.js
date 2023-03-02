const { listenerCount } = require("../models/User");
const Data=require('../models/Data')

module.exports = {
    getIndex:async (req, res) => {
        const fetch = require('node-fetch');

        
        let data;

        const url = 'https://dark-sky.p.rapidapi.com/69,-69?exclude=minutely%2C%20alerts%2C%20flags&units=auto&lang=en';
        
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
          }
        };
        
        await fetch(url, options)
        .then((res) => res.json())
        .then(output => {
            data = output;
            console.log(data); 
        } 
    )
            .catch(err => console.error('error:' + err));
      res.render("index.ejs",{data:data});
    },
    sendCords:async (req, res) => {
      const fetch = require('node-fetch');
      console.log('before')
      try {
        await Data.create({
          lat:req.body.lat,
          long:req.body.long,
          
        });

        
      const url = "https://dark-sky.p.rapidapi.com/69,-69?exclude=minutely%2C%20alerts%2C%20flags&units=auto&lang=en";
      let url1="https://dark-sky.p.rapidapi.com/"
      let lat=req.body.lat;
      let long=req.body.long;
      let new1=url1.concat(lat,",",long,"?exclude=minutely%2C%20alerts%2C%20flags&units=auto&lang=en")
      console.log(new1)

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
          }
        };
        
        await fetch(new1, options)
        .then((res) => res.json())
        .then(output => {
            data = output;
            console.log(data); 
        } 
    )
        console.log("cords has been send!");
        console.log(req.body.lat)
        res.render("index.ejs",{data:data});
      } catch (err) {
        console.log(err);
      }
  },
  };
  