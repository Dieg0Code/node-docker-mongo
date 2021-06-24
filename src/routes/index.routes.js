const { Router } = require('express');
const router = Router()

router.get('/', (req, res) => {
    res.send('Hello my friend');
});

module.exports = router;