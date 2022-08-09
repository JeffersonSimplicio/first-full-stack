const appendFile = require('fs').promises.appendFile;

function nonExistentRoute (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
}

function errorManagement (err, req, res, next) {
  const date = new Date().toLocaleString();
  const message = `[${req.method}] ${req.path} ${date} - error: ${err}\n`;
  appendFile('./errors.txt', message);
  res.status(500).json({ message: 'Erro no servidor!'});
}

module.exports = { nonExistentRoute, errorManagement }