const express = require('express');
const router  = express.Router();

router.get('/:id?', require('./service/find'));
router.post('/', require('./service/create'));
router.put('/:id', require('./service/update'));
router.patch('/:id', require('./service/update'));
router.delete('/:id', require('./service/delete'));

module.exports = router;