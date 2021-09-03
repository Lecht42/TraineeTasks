var a = function(one, two) {
  return one + two;
}
var b = function() {
  return false;
}

 function paralell(arr, callback){
	let results = new Array(); 
	
	arr.forEach(element => element.length > 1 
		? results.push(element[0](element[1][0], element[1][1])) 
		: results.push(element[0]())  ); // Я знаю что forEach не асинхронный, поэтому и "парарельных" вычислений не происходит, но и эмулировать многопоточность в однопоточном JavaScript не слишком много смысла
	
	callback(results);
}

paralell([[a, [1, 2]], [b]], function(results) {
    console.log(results); // [3, false]
});