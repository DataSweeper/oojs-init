function newError () {
}

newError.prototype = new Error();
newError.prototype.constructor = newError;

newError.prototype.constructor.toString = function () {
	return this.name + " : " + this.message;
}

function CallConst (message) {
	this.name = "Freaking !"
	this.message = message;	
}

CallConst.prototype = new newError();
CallConst.prototype.constructor = CallConst;

function MyType() {
  if (!(this instanceof MyType))
    throw new CallConst("freak!");
}

try {
	var myInstance = new MyType();
	MyType();
}
catch (e) {
	console.log(e);
}
