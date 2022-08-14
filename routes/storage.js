const express = require('express')
const router = express.Router()
const {getItems , getItem , createItem , updateItem, deleteItem } = require('../controllers/storage')

const uploadMiddleware = require('../utils/handleStorage')

router.post('/',uploadMiddleware.single("myfile"),createItem)
router.get('/',getItems)
router.get('/:id',getItem)
router.put('/:id',updateItem)
router.delete('/:id',deleteItem)

module.exports = router