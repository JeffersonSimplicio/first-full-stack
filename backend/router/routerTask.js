const express = require('express');
const router = express.Router();
const rescue = require('../rescue');
const taskManagement = require('../controllers/basicControl')
// [{id: 123, task: "exemplo de tarefa"}]

router.get('/', rescue(taskManagement.getAll));

router.post('/create', rescue(taskManagement.createTask));

router.put('/edit', rescue(taskManagement.editedTask));

router.delete('/delete/:id', rescue(taskManagement.deleteTask));

module.exports = router;
