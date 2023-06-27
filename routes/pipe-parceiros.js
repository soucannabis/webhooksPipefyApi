const axios = require('axios')
const express = require("express")
const router = express.Router()

var phaseId = []
var info = []
var date = ""

router.post('/pipe-parceiro', async (req, res) => {
    date = new Date()
   
    info = req.body.data
    
    phaseId = req.body.data.to.id
  
    if(phaseId == "320667900"){
      
      console.log("[Pipe Parceiro]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
      
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://eoho7v71bmma9kk.m.pipedream.net"
      }
  
      await axios(options)
      .catch(err => console.log(err))
  
      res.status(200).end()
    }

})

module.exports = router