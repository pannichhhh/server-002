const express = require('express');
const router = express.Router();
const {getAllEmp,getEmpbyId} = require('../controllers/controlemp');

router.get('/',getAllEmp);
router.get('/:id',getEmpbyId);
//router.get('/search/:keyword',getEmpbybyKeyword);

module.exports = router;