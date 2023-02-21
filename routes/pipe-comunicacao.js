const axios = require('axios')
const express = require("express")
const router = express.Router()

var phaseId = []
var info = []
var date = ""

router.post('/pipe-comunicacao', async (req, res) => {

    date = new Date()  
    info = req.body.data
    var options = ''
           
    phaseId = req.body.data.to.id
    
    if(phaseId == "318409148"){
      
    console.log("[Pipe Comunicação] "+info.action+" ("+info.card.title+") de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
          
      options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://7c9679a85b76e611ca8e52eb4ce51cd4.m.pipedream.net"
      }
    
      await axios(options)   
    }
              
    res.status(200).end()
    
    
    });

module.exports = router