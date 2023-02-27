const { listenerCount } = require("../models/User");

module.exports = {
    getIndex:async (req, res) => {
        const fetch = require('node-fetch');

        let obj;
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
            obj=1;
            console.log(obj)
            console.log(data);
            console.log(obj);
        } 
    )
            .catch(err => console.error('error:' + err));


        console.log("test")
        console.log(obj)
      res.render("index.ejs",{data:data,obj:obj});
    },
  };
  