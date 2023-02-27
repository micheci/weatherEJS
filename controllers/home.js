const { listenerCount } = require("../models/User");

module.exports = {
    getIndex: (req, res) => {
        const fetch = require('node-fetch');

        let obj;

        const url = 'https://dark-sky.p.rapidapi.com/69,-69?units=auto&lang=en';
        
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
          }
        };
        
        fetch(url, options)
            .then(res => res.json())
            .then(json =>obj=json)
            .then(() => {
                console.log(obj);
               })
            .catch(err => console.error('error:' + err));


        console.log("test")
      res.render("index.ejs",{obj:obj});
    },
  };
  