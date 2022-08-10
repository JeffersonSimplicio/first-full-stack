const express = require('express');
const cors = require('cors');
const { API_PORT } = require('./utils/constants');
const basicControl = require('./router/routerTask');
const errorHandling = require('./controllers/error');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/to-do', basicControl);

app.all('*', errorHandling.nonExistentRoute);

app.use(errorHandling.errorManagement);

app.listen(API_PORT, () => {
  console.log(`Aplicação ouvindo na porta ${API_PORT}`);
});
