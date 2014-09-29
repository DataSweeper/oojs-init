(function() {
	var abstractCreateLock = false;
	
	// abstract type
	function BaseForm() {
		if(abstractCreateLock)
			throw new Error("Cannot instantiate BaseForm!.");
	}
	BaseForm.prototype= {};
	BaseForm.prototype.post = function() {
		throw new Error("Not implemented!");
	}
	
	function GridForm() {
	}

	GridForm.prototype = new BaseForm();
	abstractCreateLock = true;
	GridForm.prototype.post = function() {
		return "Grid is posted.";
	}
	window.BaseForm = BaseForm;
	window.GridForm = GridForm;
})();

var myGrid = new GridForm();
console.log(myGrid.post());
var myForm = new BaseForm();

