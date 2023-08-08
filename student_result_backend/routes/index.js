var express = require('express');
var router = express.Router();
const { addResult, getResult, updateResult, getsingleResult, deleteResult } = require('../Controller/resultController');


const cors = require('cors');
const corsOptions = {
  origin : 'http://localhost:3000',
//   credentials: true,
// optionSuccessStatus: 200
}
router.use(cors(corsOptions))


/* GET home page. */
router.post('/addresult',addResult);
router.get('/getresult',getResult);
router.get('/singleresult',getsingleResult);
router.put('/updateresult',updateResult);
router.delete('/deleteresult/:id',deleteResult);


module.exports = router;
