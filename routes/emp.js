const express = require('express');
const router = express.Router();
const {getAllEmp,getEmpbyId,insertEmp} = require('../controllers/controlemp');


router.get('/',getAllEmp);
router.get('/:id',getEmpbyId);
//router.get('/search/:keyword',getEmpbyKeyword);

router.post('/',insertEmp);

module.exports = router;