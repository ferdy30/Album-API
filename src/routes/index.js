const { Router } = require('express');
const router = Router();
const albumController = require('../controllers/albumController');



router.get('', albumController.list);

router.get('/api/list/:id', albumController.show);

router.post('/api/list', albumController.add);

router.put('/api/list/:id', albumController.update);

router.delete('/api/list/:id', albumController.delete);


module.exports = router;