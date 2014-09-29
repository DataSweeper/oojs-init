function BaseException () {
}

BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function () {
	// note name and message are properties of Error
	return this.name + ": " + this.message;
}

function NegativeNumberException (value) {
	this.name = "NegativeNumberException";
	this.message = "Negative number: Value: " + value;
}

NegativeNumberException.prototype = new BaseException();
NegativeNumberException.prototype.constructor = NegativeNumberException;

function EmptyNumberException () {
	this.name = "Empty Number exception";
	this.message = "Empty input!";
}

EmptyNumberException.prototype = new BaseException();
EmptyNumberException.prototype.constructor = EmptyNumberException;

var InputValidator = (function () {

	var InputValidator = {};

	InputValidator.validate = function (data) {

		var validations = [validateNotNegative, validateNotEmpty];

		for (var i = 0; i < validations.length; i++) {
			try {
				validations[i](data);
			}
			catch (e) {
				if (e instanceof NegativeNumberException) {
					throw e;
				}
				else if (e instanceof EmptyNumberException) {
					data = 0;
				}
			}
		}
	}

	return InputValidator;
	
	function validateNotNegative (data) {
		if (data < 0)
			throw new NegativeNumberException(data);
	}

	function validateNotEmpty (data) {
		if (data == "" || data.trim() == "")
			throw new EmptyNumberException();
	}
	
})();

try {
	InputValidator.validate("");
}
catch (e) {
	console.log(e.toString());
	console.log("Validation is done.");
//	var validation = [validateNotNegative, validateNotEmpty];
}

