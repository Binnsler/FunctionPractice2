
///// Problem 1 /////

// var getName = function(object){
// 	return object.name;
// }

// console.log(getName({ name: 'Luisa', age: 25 }))


///// Problem 2 /////

// var totalLetters = function(array){

// 	var count = 0;

// 	for(var i = 0; i < array.length; i++){
// 		count += array[i].length;
// 	}

// 	return count;

// }

// console.log(totalLetters(['javascript', 'is', 'awesome']));

///// Problem 2 Refactored /////

// var totalLetters = function(array){
// 	var count = 0;
// 	array.forEach(function(element){
// 		count += element.length;
// 	});
// 	return count;
// }

// console.log(totalLetters(['javascript', 'is', 'awesome']));

///// Problem 3 /////

// var keyValue = function(key, value){

// 	var object = {};
// 	object[key] = value;
// 	return object;

// }
// console.log(keyValue('city', 'Denver'));


///// Problem 4 /////

// var negativeIndex = function(array, negative){
// 	return array[array.length+negative];
// }

// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))


///// Problem 5 /////

// var removeM = function(string){
// 	var replacedString = string.toLowerCase();

// 	replacedString = replacedString.replace(/m/g, '');
	
// 	return replacedString;

// }

// OR

// var removeM = function(string){
// 	var splitString = string.toLowerCase().split('');
// 	for(var i = 0; i < splitString.length; i++){
// 		if(splitString[i]=== 'm'){
// 			splitString[i] = '';
// 		}
// 	}
// 	var newString = splitString.join('');
// 	return newString;
// }
// console.log(removeM('family'))
// console.log(removeM('Mommy'))


///// Problem 6 /////

// var printObject = function(object){
// 	for(key in object){
// 		console.log(key + ' is ' + object[key]);
// 	}
// }

// printObject({ a: 10, b: 20, c: 30 });


///// Problem 7 /////

// var vowels = function(string){
// 	var lowerString = string.toLowerCase();
// 	var vowelArray = [];
// 	for(var i = 0; i < lowerString.length; i++){
// 		if(lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u' || lowerString[i] === 'y'){
// 			vowelArray.push(lowerString[i]);
// 		}
// 	}
// 	return vowelArray;
// }

// console.log(vowels('alabama'));
// console.log(vowels('What evil odd ducks!'));


///// Problem 8 /////

// var twins = function(array){
// 	var count = 0;
// 	var trueFalse = null;
// 	if (array.length % 2 === 0){
// 		for(var i = 0; i <= array.length; i += 2){
// 			if(array[i] === array[i+1]){
// 				count += 2;
// 			}
// 			else{
// 				count += 1;
// 			}
// 		}
// 		if(count%2 === 0){
// 			trueFalse = true;
// 		}
// 		else{
// 			trueFalse = false;
// 		}
// 		return trueFalse;
// 	}
// 	else{
// 		return false;
// 	}
// 	}

// console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
// console.log(twins(['a', 'a', 'b', 'z']))
// console.log(twins(['a', 'a', undefined]))


///// Problem 9 /////

// var or = function(array){
// 	if (array.length === 0){
// 		return false;
// 	}
// 	else{
// 		var count = 0;
// 		for(var i = 0; i < array.length; i++){
// 			if(array[i] === true){
// 				count ++;
// 			}
// 			else{
// 				count += 0;
// 			}

// 		}
// 		if (count === 0){
// 			return false;
// 		}
// 		else{
// 			return true;
// 		}
// 	}
// }

// console.log(or([false, false, true, false]))
// console.log(or([false, false, false]))
// console.log(or([]))


///// Problem 9 Refactored /////

// var or = function(array){
// 	var count = 0;
// 	if(array.length === 0){
// 		return false;
// 	}
// 	else{
// 		array.forEach(function(element){
// 			if(element === true){
// 				count ++;
// 			}
// 			else{
// 				count += 0;
// 			}
// 		})
// 	if (count === 0){
// 		return false;
// 	}
// 	else{
// 		return true;
// 	}
// 		}
// 	}


// console.log(or([false, false, true, false]))
// console.log(or([false, false, false]))
// console.log(or([]))

///// Problem 10 /////

// var unique = function(array){
// 	var newArray = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (newArray.indexOf(array[i]) === -1){
// 			newArray.push(array[i])
// 		}
// 	};
// 	return newArray;
// }

// console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
// console.log(unique(['todd', 'avery', 'maria', 'avery']))


/// Problem 10  Refactored /////

// var unique = function(array){
// 	var newArray = [];
// 	array.forEach(function(element){
// 		if (newArray.indexOf(element) === -1){
// 			newArray.push(element)
// 		}
// 	});
// 	return newArray;
// }

// console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
// console.log(unique(['todd', 'avery', 'maria', 'avery']))






















