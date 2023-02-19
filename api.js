const express = require('express');
const axios = require('axios')
const app = express();
const pipeAssociados = require("./routes/pipe-associados")

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use("/", pipeAssociados)


app.listen(process.env.PORT || 3000, () => {
    console.log('Webhooks Pipefy API RUN!');
  });
  
