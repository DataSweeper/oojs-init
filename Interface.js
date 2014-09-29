var Interface = function (name, methods) {
	this.name = name;
	//copies array
	this.methods = methods.slice(0);
	console.log("Name : " + this.name + " methods : " + this.methods)
}

Interface.checkImplements = function(obj, interfaceObj) {
	for (var i = 0; i < interfaceObj.methods.length; i++) {
		var method = interfaceObj.methods[i];
		console.log("Next condition : " + obj[method] + " : " + typeof obj[method])
		if (!obj[method] || typeof obj[method] != "function")
			throw new Error("Interface not implemented! Interface : " + interfaceObj.name + "method: " + method);
	}
}

var iMeterial = new Interface("IMaterial", ["getName", "getPrice"]);

function Product(name, price, type) {
	Interface.checkImplements(this, iMeterial);
	this.name = name;
	this.price = price;
	this.type = type;
}

Product.prototype.getName = function() {
	return this.name;
}

Product.prototype.getPrice = function() {
	return this.price;
}

var firstCar = new Product("Super car X11", 20000, "Car");
console.log(firstCar.getName());
delete Product.prototype.getPrice;
//var secondCar = nwe Product("SuperCarX12", 30000, "Car");
