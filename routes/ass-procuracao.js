const axios = require('axios')
const express = require("express")
const router = express.Router()

var date = ""

router.post('/ass-procuracao', async (req, res) => {
    date = new Date()  
  
    if(req.body.name == "Procuração Pontual"){
      
      console.log("[Ass Procuração] Procuração Assinada por: "+req.body.signers[0].name+" - "+date)
         
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body,
      url: "https://0e1413c2f059c14ef1b747245fab7946.m.pipedream.net"
      }
    
      await axios(options)   
     
    res.status(200).end()
      
    }  
    });

module.exports = router