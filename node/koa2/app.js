const Koa = require('koa');
const xlsx = require('node-xlsx');
const fs = require('fs');		// （5）读取模版文件
const path = require('path');
const serve = require('koa-static');		// （10）koa-static模块封装网站全部静态资源请求
const app = new Koa();		// （0）实例化一个Koa实例

// （12）配置koa-staitc
const main = serve(path.join(__dirname));

let obj = xlsx.parse(__dirname + '/yao.xlsx');		// 配置excel文件的路径
let excelObj = obj[0].data;		  // excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容
//一个sheet文档中的内容包含sheet表头 一个excelObj表示一个二维数组，excelObj[i]表示sheet文档中第i+1行的数据集（一行的数据也是数组形式，访问从索引0开始）

let data = []
for (let i = 1; i < excelObj.length; i++) {
	if (excelObj[i][4]) {
		let _obj = {}
		_obj.hubId = excelObj[i][0];
		_obj.hubNo = excelObj[i][1];
		_obj.hubName = excelObj[i][2];
		_obj.groupId = excelObj[i][4];
		data.push(_obj);
	}
}
let result = {
	'data': data
};

//将文件内容插入新的文件中
fs.writeFileSync('serviceData.json', JSON.stringify(result));


app.use(main);
// app.listen(1919);