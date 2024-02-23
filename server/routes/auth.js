const express=require ('express')
const cors=require('cors');
const { test, addData, getDetails, deleteRecord } = require('../controllers/file');
const router=express.Router();
router.use(express.json());
router.use(
    cors({
        origin : 'http://localhost:5173',
        credentials : true
    })
)

router.get('/', test);
router.get('/getDetails',getDetails);
router.post('/addData', addData);
router.post('/deleteRecord', deleteRecord);

module.exports=router;