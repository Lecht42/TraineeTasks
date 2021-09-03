let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример: 

function array_combine (keys, values) {
	let map = new Map();
	
	keys.forEach(function(element, i) {
		map[keys[i]] = values[i];
	});
	
	return map;
}

let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
console.log(result);