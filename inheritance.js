function Parent() {
	var parentPrivate = "parent private data";
	var that = this;

	//public method.
	this.parentMethodForPrivate = function() {
		return parentPrivate;
	}
	console.log("parent");
}

Parent.prototype = {
	parentData : "parent data",
	parentMethod : function (arg) {
		return "parent method.";
	},
	overrideMethod : function (arg) {
		return arg + "overriden parent method";
	}
}

function Child() {
//super constructor is not called, we have to invoke it
	Parent.call(this);
	console.log(this.parentData);
	var that = this;
	this.parentPrivate = function() {
		return that.parentMethodForPrivate();
	}
	console.log("child");
}

//inheritence
Child.prototype = new Parent();
Child.prototype.constructor = Child;

//lets add exdented functions
Child.prototype.extensionMethod = function() {
	return "child's " + this.parentDate;
}

//override inherited function
Child.prototype.overrideMethod = function() {
	//parent's method is called
	return "Invoking from child" + Parent.prototype.overrideMethod.call(this, " test");
}

var child = new Child(); //parent
console.log(child.extensionMethod());
console.log(child.parentData);
console.log(child.parentMethod());
console.log(child.overrideMethod());
console.log(child.parentPrivate());

console.log(child instanceof Parent);
console.log(child instanceof Child);
console.log(Child.prototype instanceof Object);
