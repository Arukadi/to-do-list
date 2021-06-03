const router = require('express-promise-router')();
const taskController = require('../controllers/task.controller');

router.get('/tasks', taskController.getAllTask);
router.post('/tasks', taskController.createProduct);
router.put('/tasks', taskController.updateTask);

module.exports = router;