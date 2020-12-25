const express = require('express')
const controller = require('../controllers/bikes')
const router = express.Router()

router.get('/', controller.getAll)
router.post('/create', controller.create)
router.put('/update/:id', controller.update)
router.delete('/remove/:id', controller.remove)


module.exports = router