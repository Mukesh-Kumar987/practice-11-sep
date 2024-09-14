const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');

router.get('/users', (req, res)=>{
    usercontroller.getAllUsers(req, res)
})

router.get('/user/:id', (req, res)=>{
    usercontroller.getuser(req, res)
})

router.post('/add/user', (req, res)=>{
    usercontroller.addUser(req,res)
})

router.put('/edit/user/:id', (req, res)=>{
    usercontroller.editUser(req, res)
})

router.delete('/delete/user/:id',(req, res)=>{
    usercontroller.deleteUser(req, res)
})
module.exports=router;