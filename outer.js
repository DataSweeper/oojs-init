function Outer() {
	return new Inner();

	function Inner() {
		this.sayHello = function() {
			console.log("Hello.");
		}
	}
	sayHello = function() {
		console.log("Hello world");
	}
}
(new Outer()).sayHello();
//(new Outer().sayHello());
//(new Outer().sayHello);
