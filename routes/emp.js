const express = require('express');
const router = express.Router();

const {
    getAllEmp,
    getEmpbyId,
    insertEmp
} = require('../controllers/controlemp');

/**
 * @swagger
 * /api/emp:
 *  get:
 *      summary: Get all Employee
 *      description: Get all Employee
 *      responses:
 *          200:
 *             description: A list of Employee
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Employee'
 * 500:
 * description: Some error happened
 */

router.get('/',getAllEmp);
/**
 * @swagger
 * /api/emp/:id:
 *  get:
 *      summary: Get Employeev by ID
 *      description: Get Employeev by ID
 *      responses:
 *          200:
 *             description: A list of Employee
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Employee'
 * 500:
 * description: Some error happened
 */
router.get('/:id',getEmpbyId);
//router.get('/search/:keyword',getEmpbyKeyword);


/**
 * @swagger
 * /api/emp:
 *  post:
 *      summary: Insert new Employee profile 
 *      description: Insert new Employee profile
 *      responses:
 *          200:
 *             description: Insert new Employee profile
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Employee'
 * 500:
 * description: Some error happened
 */
router.post('/',insertEmp);

module.exports = router;