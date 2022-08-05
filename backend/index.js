const express = require('express');
const cors = require('cors');
require('dotenv').config();
const basicControl = require('./router/basicControlCrud')

const API_PORT = Number(process.env.API_PORT) || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/to-do', basicControl)

app.listen(API_PORT, () => {
  console.log(`Aplicação ouvindo na porta ${API_PORT}`);
});