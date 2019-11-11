const { Router } = require('express');
const rCotroller = require('../controllers/reserva.controller');
const mVerified = require('../middlewares/verify.middleware');
const router = Router();

//router.get('/',mVerified.auth,rCotroller.disponibilidad);
router.post('/',mVerified.auth,rCotroller.crear_reserva);
router.post('/silla',mVerified.auth,rCotroller.reservar_silla);

module.exports = router;