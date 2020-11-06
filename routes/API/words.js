const { request } = require("express").Router();
// const wordsController = require("../../controllers/wordcontrollers");

const axios = require("axios");

const wordsAPI = { 
    getwords:function(){    
        var options = {
          method: 'GET',
          url: 'https://rapidapi.p.rapidapi.com/words/hatchback/typeOf',
          headers: {
            'x-rapidapi-key': '0fc2d0a77cmshbe792af71542bf5p134800jsn3fa7dd925eba',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
          }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
};
module.exports = wordsAPI;



