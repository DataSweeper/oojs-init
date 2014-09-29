function Customer(name) {
	var that = this;
	var risk = 0;
	this.name = name;
	var findType = function() {
		console.log(that.name);
		console.log(risk);
		return "GOLD";
	};

	this.type = findType();

}

var customer = new Customer("ABC Customer");

console.log(customer.type);
console.log(customer.risk);
console.log(customer.name);
console.log(customer.that);
console.log(Customer.risk);
