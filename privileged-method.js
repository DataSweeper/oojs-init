function 
Customer(orderAmount) {
	//private field
	var cost = orderAmount / 2;
	this.orderAmount = orderAmount;
	var that = this;
	
	// privilaged method
	this.calculatedProfit = function() {
		return that.orderAmount - cost;
	}
}

Customer.prototype.report = function() {
	console.log(this.calculatedProfit());
}

var customer = new Customer(3000);
customer.report();

