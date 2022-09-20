const User = require("../model/user.model")

exports.user = function(req, res){
    User.getUser((user) => {
        res.send(user)
    })
}

exports.createUser = function(req, res){
    var data = req.body
    User.createUser(data, (user) => res.send(user))
}

exports.detail = function(req, res){
    User.getUserById(req.params.id, (user) => {res.send(user)})
}

exports.remove = (req, res) => {
    User.deleteUserById(req.params.id, (deleteStatus) => {res.send(deleteStatus)})
}

exports.update = (req, res) => {
    User.updateUserById(req.params.id, req.body, (result) => res.send(result))
}