const axios = require('axios')
const express = require("express")
const router = express.Router()

router.post('/pipe-pedidos', async (req, res) => {

    date = new Date()
  
    info = req.body.data
  
    phaseId = req.body.data.to.id
  
    if(phaseId == "310523364"){ 
      
      console.log("[Pipe Pedidos]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)    
     
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://b82a232d63d9b377a4a60cddd0a2553e.m.pipedream.net"
      }
  
      await axios(options)
  
      res.status(200).end()
    }
  
  });

module.exports = router