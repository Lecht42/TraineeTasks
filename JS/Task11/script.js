let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:

function array_pluck(arr, key){
	var newArr = new Array();
	
	arr.forEach(function (element){
		if(element[key] == undefined){
			let subMap = key.slice(0, key.indexOf('.'));
			let afterDot = key.slice(key.indexOf('.')+1, key.length);
			subMap = element[subMap];
			newArr.push(subMap[afterDot]);
		}
		else
			newArr.push(element[key]);
	});
	
	return newArr;
}

let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
console.log(result);
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]
console.log(result2);