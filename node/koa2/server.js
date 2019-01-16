const Koa = require('koa');
const xlsx = require('node-xlsx');
const fs = require('fs');		// （5）读取模版文件
const path = require('path');
const serve = require('koa-static');		// （10）koa-static模块封装网站全部静态资源请求
const app = new Koa();		// （0）实例化一个Koa实例

// （12）配置koa-staitc
const main = serve(path.join(__dirname));

let obj = xlsx.parse(__dirname + '/yao.xlsx');		// 配置excel文件的路径
let excelObj = obj[0].data;

let order = 9
let hubId = ''
let data = []

for (let i = 1; i < excelObj.length; i++) {
	if (excelObj[i][4]) {
		data.push(excelObj[i][0])
	}
}

hubId = data[order];

let sql = "UPDATE  vip_users set vip_users_id='abc4d8cf-685b-e411-8ef4-6cae8b2'" + "abc" + (order > 9 ? order : '0' + order) + " WHERE vip_users_id='" + hubId + "';\nUPDATE inner_org SET vip_users_id='" + hubId + "' where vip_users_id='" + data[order-1] + "';\nUPDATE vip_users_relation set vip_users_id='" + hubId + "' where vip_users_id='" + data[order-1] + "';\nUPDATE vip_users set vip_users_id='" + hubId + "' where vip_users_id='" + data[order-1] + "';\nUPDATE vip_users_relation set parent_id='" + hubId + "' where vip_users_id='385c820f-6c90-4dd2-97e1-cf355d36e2c7' and parent_identity=21;"


console.log('>>>>> SQL >>>>');
console.log(sql);

app.use(main);