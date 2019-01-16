var xlsx = require('node-xlsx'),
  fs = require('fs');
//读取文件内容
var obj = xlsx.parse('../static/allQuestions.xlsx');
var excelObj = obj[0].data;

/*
  var data = [];
  for (var i in excelObj) {
    var arr = [];
    var value = excelObj[i];
    for (var j in value) {
      arr.push(value[j]);
    }
    data.push(arr);
  }
  var buffer = xlsx.build([
    {
      name: 'sheet1',
      data: data
    }
  ]);


  //将文件内容插入新的文件中
  fs.writeFileSync('test1.xlsx', buffer, { 'flag': 'w' });
*/

var result = {};
  data = [];

for (var i = 0; i < excelObj.length; i++) {
  var item = {};
  item.answer = [];
  item.id = excelObj[i][0];
  item.title = excelObj[i][1];
  item.answer.push(excelObj[i][2]);
  item.answer.push(excelObj[i][3]);
  if (excelObj[i][4]) {
    item.answer.push(excelObj[i][4]);
  }
  item.rightAns = excelObj[i][2];
  data.push(item);
}
result.records = data;

fs.writeFileSync('../static/question.json', JSON.stringify(result), { 'flag': 'w' });