//static members example.

function Factory() { }

//public staic method
Factory.getType = function () {
	return "Object Factory";
}

//public static field
Factory.versionId = "F2.0";

Factory.prototype.test = function() {
	console.log(this.versionId);
	console.log(Factory.versionId);
	console.log(Factory.getType());
}

var factory = new Factory()

factory.test();
console.log(Factory.getType());
console.log(Factory.versionId);
