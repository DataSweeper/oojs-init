function Cat(name) {
	var voice = "Meow";
	this.name = name;
	this.say = function() {
		return voice;
	}
}

Cat.prototype.eat = function() {
	return "Eating";
}

var cat = new Cat("freak.");

Object.defineProperty(cat, "numLegs",{ value:4 ,writable:true,enumerable:true,configurable:true});

console.log(cat.name);
console.log(cat.numLegs);
console.log(cat.say());
console.log(cat.eat());
