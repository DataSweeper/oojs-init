function Customer() {
	// public method
	this.shipOrder = function(shipAmount) {
		return shipAmount;
	}
}

//public method
Customer.prototype.addOrder = function (orderAmount) {
	var totalOrder = 0;
	for (var i = 0; i < arguments.length; i++) {
		totalOrder += arguments[i];
	}
	return totalOrder;
}

var customer = new Customer();

//public method
customer.findType = function() {
	return "NORMAL";
}

console.log(customer.addOrder(25, 75));
console.log(customer.shipOrder(50));
console.log(customer.findType());

