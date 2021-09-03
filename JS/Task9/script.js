// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 

let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},
{"name":"Dima","email":"dima@example.com","age":34},
{"name":"Colya","email":"colya@example.com","age":46},
{"name":"Misha","email":"misha@example.com","age":16},
{"name":"Ashan","email":"ashan@example.com","age":99},
{"name":"Rafshan","email":"rafshan@example.com","age":11},
1,2,1990,85,24,"Vasya","colya@example.com","Rafshan",
"ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya",
"colya@example.com","Rafshan","ashan@example.com",
true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]
	
				
function array_normalize(arr, shema, transform){
	var newArr = new Array();
	
		function expand_array(_arr, _shema, _transform){
			_arr.forEach(function(element){
				if(typeof(element) === typeof(_shema))
					newArr.push(element);
				else if (typeof(element) !== 'object' && transform)
					newArr.push(element.toString());
			});
		};
	
	
	expand_array(arr, shema, transform);
	
	return newArr;
}

let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
console.log(result);
let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
console.log(result2);
//Не совсем понял как правильно как раскрывать содержимое объектов, разве что через рекурсию, но у меня это не вышло...
let result3 = array_normalize(testData4, {age: 'float'}) // []
console.log(result3);
let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
console.log(result4);