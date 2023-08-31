const axios = require('axios')
const express = require("express")
const router = express.Router()

var phaseId = []
var info = []
var api = []
var date = ""

router.post('/pipe-associados', async (req, res) => {
    date = new Date()
   
    info = req.body.data
    api.push(info)
    
    phaseId = req.body.data.to.id
  
    if(phaseId == "311520852"){
      
      console.log("[Pipe Associados]"+info.action+" de "+info.from.name+" para "+info.to.name+" por "+info.moved_by.name+" - "+date)
      
      const options = {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      mode: "cors",
      data: req.body.data,
      url: "https://94e0dcf0d9bb72b7cacc8bd4c299a8b9.m.pipedream.net"
      }
  
      await axios(options)
      .catch(err => console.log(err))
  
      res.status(200).end()
    }

})

module.exports = router