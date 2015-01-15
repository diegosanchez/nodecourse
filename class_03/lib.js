/**
Name: $_$
Version: 0.0.1
*/

(function(){
	function addVersion (to, version) {
		to.version = to.version || function () {
			return version;
		}
	}


	Array.prototype.min = Array.prototype.min || function(){
	var p=null; 
	for(var x=0; x<this.length; x++) {
		if(typeof this[x] == "number"){
		 p = p==null ? this[x] : ( p<this[x] ? p : this[x]);
		}
	}//end for
	return p;
	}

	addVersion(Array.prototype.min, "0.0.1");


	/****
	* Returns max value which belongs to the array
	*/
	Array.prototype.max = Array.prototype.max || function(){
		var p=null; 
		for(var x=0; x<this.length; x++) {
			if(typeof this[x] == "number"){
				p = p==null ? this[x] : ( p > this[x] ? p : this[x]);
			}
		}//end for
		return p;
	}
	addVersion(Array.prototype.max, "0.0.1");

	Array.prototype.forEach = function(callback) {
		for(var x=0; x < this.length; x++) {
			var r = callback(this[x]);
			this[x] = r === undefined ? this[x] : r;
		}

		return this;
	};
	addVersion(Array.prototype.forEach, "0.0.1");

	Array.prototype.last = function() {
		return this[this.length-1];
	};
	addVersion(Array.prototype.last, "0.0.1");

	/***
	* if data is an array then add each element of data to this, otherwise add data 
	* to this.
	*/
	Array.prototype.append = function(data) {
		if ( data.forEach === undefined) {
			this.push(data);
			return this;
		};

		for(var x=0; x < data.length; x++) {
			this.push(data[x]);
		}

		return this;

	};

	Object.prototype.isObject = function() {
		return Object.prototype.toString.call(this) === "[object Object]";
	};

	Object.prototype.isArray = function() {
		return Object.prototype.toString.call(this) === "[object Array]";
	};

	Math.sum = function (argument) {
		if ( ! argument.isArray() )
			return null;

		// The argument is an array
		var result = 0;

		argument.forEach( function (e) {
			result += e;
		})

		return result;
	}
})();
