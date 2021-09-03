let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 1, 1990, 85, 24, 5, 1, 8.1];
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]


function string_to_regex(txt){
	
	if (typeof(txt) === 'string' && txt.charAt(0) == '/' ){
		let tmpTxt = txt.substring(1, txt.length-1);
		
		if(txt.charAt(txt.length - 2) == '/'){
			let tmp = txt.charAt(txt.length - 1);
			txt = txt.substring(1, txt.length - 3);
			return new RegExp(txt, tmp);
		} else if (txt.charAt(txt.length - 1) == '/'){
			txt = txt.substring(1, txt.length-1);
		} 
	}
	
	return new RegExp(txt);
	
}

function array_find(data, txt){
	var numbers = new Array();
	var reg = string_to_regex(txt);
	
	for(var i = 0; i < data.length; i++){
		if(typeof(data[i]) === 'string' && reg.test(data[i])){
			return(data[i]);
		} else if(typeof(data[i]) === 'number' && data[i] == txt){
			numbers.push(data[i]);
		}
	}
		
	if(numbers.length > 0)
		return numbers;
	
	return null;
}

let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
console.log(result)
let result2 = array_find(testData, "Rafshan") // ["Rafshan"]
console.log(result2)
let result3 = array_find(testData, '/Rafshan/') // ["Rafshan"]
console.log(result3)
let result4 = array_find(testData2, 1) // [1, 1, 1]
console.log(result4);
let result5 = array_find(testData, '/Raf.*/') // ["Rafshan"]
console.log(result5);