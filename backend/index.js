const express = require('express');
const cors = require('cors');
require('dotenv').config();
const basicControl = require('./router/basicControlCrud');
const appendFile = require('fs').promises.appendFile;

const API_PORT = Number(process.env.API_PORT) || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/to-do', basicControl)

app.use((err, req, res, next) => {
  const date = new Date().toLocaleString();
  const message = `[${req.method}] ${req.path} ${date} - error: ${err}\n`;
  appendFile('./errors.txt', message);
  res.status(500).json({ message: 'Erro no servidor!'});
});

app.listen(API_PORT, () => {
  console.log(`Aplicação ouvindo na porta ${API_PORT}`);
});
