var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

function recuseLog(arr, index = 0) { 
	console.log(arr[index]);
	index++;
	
	if(index == arr.length) 
		return console.log("END");
	
	return recuseLog(arr, index);
} 

recuseLog(arr);