const axios = require('axios')
const express = require("express")
const router = express.Router()

router.post('/pipe-juridico', async (req, res) => {
    date = new Date()  
    info = req.body.data
    var check = ''
      
    phaseId = req.body.data.to.id
      
    optionsPipe = {
          method: 'POST',
          url : 'https://api.pipefy.com/graphql',
          headers: {
              'accept': 'application/json',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDE5OTU2ODEsImVtYWlsIjoiZmVsaXBlcm9zZW5la0BnbWFpbC5jb20iLCJhcHBsaWNhdGlvbiI6MzAwMTQyMDIwfX0.JugAF92MqbUV_fLVKEcF5jUI3G4G2hlAmLeBJ-dEfsEIlX3gdKO1IfbQRUYvHvAk569vuD9K_zCrKylY6R6agw',
              'Content-Type': 'application/json'
          },
          data: JSON.stringify({
              query: '{card(id: '+req.body.data.card.id+') {fields{name value }}}'
          })
      };
  
      await axios(optionsPipe)
        .then(function (response) {
          data = response.data.data.card.fields
          return data
      })
      .catch(function (error) {
         console.log(error);
      })
  
      data.forEach(function(item){
      if(item.name == 'Enviar procuração farmácia de alto custo'){
        check = item.value
      return check
      }      
    })
  
    if(phaseId == "314055677" && check.length != 2){
       console.log("[Pipe Juridico] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
      
       const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://817a2d4e5fcde1ede0b1fb080b673124.m.pipedream.net"
      }  
      await axios(options)   
    }
    
    res.status(200).end()     

    
    });

module.exports = router