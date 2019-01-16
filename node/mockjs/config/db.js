/*
  mysql数据库请求配置
  mysql的pool请求池只支持callback回调语法，为配合koa2，使用new Promise封装成async异步语法
  同时在mysql中设置了mysql_native_password，而非mysql默认密码
*/
const mysql = require('mysql')

const defautConfig = {
  host: 'localhost',
  database: 'nodesql',
  user: 'root',
  password: 'root1234',
  connectionLimit: 20
}

const asyncMysqljs = function(sql, values ,config = defautConfig) {
  const pool = mysql.createPool(config)
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err)
      } else {
        conn.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          conn.release()
        })
      }
    })
  }).catch((error) => {
      console.log(error, 'Promise error')
  });
}

module.exports = asyncMysqljs