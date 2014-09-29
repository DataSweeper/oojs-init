/*var dog = {};
var dog = new MyDogType(); */

var dog = new Object();
dog.owner = new Object(); 
dog.owner.name = "Mike";
dog.park = function() {
	return "Woof";
};

console.log(dog.name);
console.log(dog.owner.name);
console.log(dog.owner);
console.log(dog.park());
