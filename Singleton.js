var Logger = {
	enabled:true,
	log: function(logText) {
		if (!this.enabled)
			return;
		if (console && console.log)
			console.log(logText);
		else
			alert(logText);
	}
}
