function Customer() {
	var risk = 0;
	this.getRisk = function() {
		return risk;
	}
	this.setRisk = function(newRisk) {
		risk = newRisk;
	}
	this.checkRisk = function() {
		if (risk > 1000)
			return "Risk Warning";
		return "No Risk";
	};
}

Customer.prototype.addOrder = function(orderAmount) {
	this.setRisk(orderAmount + this.getRisk());
	return this.getRisk();
}

var customer = new Customer();
console.log(customer.getRisk());
console.log(customer.addOrder(2000));
console.log(customer.getRisk());
console.log(customer.checkRisk());
