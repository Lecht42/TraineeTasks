var arr = [1, 2, 3];

Array.prototype.append = function(newValue) {
	let tmpArr = this.slice();
	this.length = 1;
	this[0] = newValue;
	
	tmpArr.forEach(currentValue => 
		this.push(currentValue)
	);
};

console.log("Массив до добавления '0'")
console.log(arr)

arr.append(0);

console.log("Массив после добавления '0'")
console.log(arr)