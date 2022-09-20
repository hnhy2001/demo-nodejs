var User = function(user){
    this.id = user.id
    this.name = user.name
}

const { json } = require("express/lib/response")
var db = require("../config/db.config")
const { use } = require("../router/user.router")

User.getUser = function(result){
    db.query("SELECT * FROM users",(err, user) => {
        if(err){
            result(null)
        }
        else{
            result(user)
        }
    })
}

User.createUser =(newUser, result)  => {
    db.query("INSERT INTO users SET ?",  newUser, (err, user)=> {
        if(err){
            result("tao that bai")
        }
        else{
            result(newUser)
        }
    })
}

User.getUserById =(id, result)  => {
    db.query("SELECT * FROM users WHERE id = ?", id,  (err, user)=> {
        console.log(user)
        if(err){
            result(null)
        }
        else{
            result(user[0])
        }
    })
}

User.deleteUserById = (id, result) => {
    db.query("DELETE FROM users WHERE id = ?", id, (err, user) => {
        if(err){
            result("xóa thất bại")
        }
        else{
            result("xóa thành công")
        }
    })
}

User.updateUserById = (id, data, result) => {
    console.log(id)
    console.log(data)
    db.query("UPDATE users SET name = ? WHERE id = ?", [data.name, id], (err, user) => {
        if(err){
            console.log(err)
            result("update thất bại", err)
        }
        else{
            result(data)
        }
    })
}

module.exports = User