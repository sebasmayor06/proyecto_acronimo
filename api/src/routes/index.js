const {Router} = require("express");
const getAcronico = require ("../controllers/getAcronimo")
const postAcronimo = require ('../controllers/postAcronimo')
const getBusquedas = require ('../controllers/getBusquedas')


const router = Router();

router.get("/", getAcronico)
router.post("/busquedas", postAcronimo)
router.get("/historial", getBusquedas)

module.exports = router;