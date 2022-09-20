var mysql = require('mysql')
var conectSql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "demo_user"

})

conectSql.connect(err => {
    if(err) console.log(err)
    else console.log("thanh cong")
})

module.exports = conectSql