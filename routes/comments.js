import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send("Test"))
router.post('/' ,(req, res) => res.send("Test Post"))

module.exports = router
