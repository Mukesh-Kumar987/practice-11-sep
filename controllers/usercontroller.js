
const users = require('../users.json');
const fs = require('fs');

function getAllUsers(req, res){
    try{
      res.json(users)
    }catch(err){
        console.log(err)
    }
}
function getuser(req, res){
    try{
        let id = parseInt(req.params.id);
        let user = users.find((user)=>user.id===id)
        res.json(user)

    }catch(err){
        console.log(err)
    }
}

function addUser(req, res){
    try{
        console.log(req.body);
        req.body.id=users.length+1;
        users.push(req.body);
        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log('problem')
            }else{
                console.log('file has been added');
                res.end('user added')
            }
        })


    }catch(err){
        console.log(err)
    }
}

function editUser(req , res){
    try{
        let id =parseInt(req.params.id);
        let Index=users.findIndex((user)=>user.id===id);
        console.log(Index);
        users[Index].first_name='Shiv'
        fs.writeFile('users.json', JSON.stringify(users),(err)=>{
            if(err){
                console.log("problem")
            }else{
                console.log("File has been added")
                res.end("user added")
            }
        })
        res.end("updation in progress")

    }catch(err){
        console.log(err)
    }
}

function deleteUser(req, res){
    try{
        let id =parseInt(req.params.id);
        let Index = users.findIndex((user)=>user.id===id);
        console.log(Index);
        users.splice(Index,1);
        fs.writeFile('users.json', JSON.stringify(users), (err)=>{
            if(err){
                console.log('Problem')
            }
            else{
                console.log("File has been deleted");
                res.end("User deleted")
            }
        })
    }catch(err){
        console.log(err)
    }
}

module.exports={
    getAllUsers,
    getuser,
    addUser,
    editUser,
    deleteUser
}