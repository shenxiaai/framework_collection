var arr = [[],[],[]],
    len = 0,
    obj = {
      'name': '张三',
      'sex': 'male',
      'age': 22
    };
for(var key in obj){
	console.log(len);
	var index=len++;
	arr[index][0] = key;
	arr[index][1] = obj[key];
}
console.log('arr = ');
console.log(arr);






var arr = [],
    len = 0,
    obj = {
      'name': '张三',
      'sex': 'male',
      'age': 22
    };
for(var key in obj){
	console.log(len);
  arr.push([key + '":"' + obj[key]]);
}
console.log('arr = ');
console.log(arr);







var obj = {
		'name': '张三',
		'sex': 'male',
		'age': 22
	};
var newArr = Object.keys(obj).map(
	function(k){
		return[k,obj[k]]
	}
);
console.log(newArr);