var request = require('request');
var qs = require('query-string');

class jService{
	constructor(){
		this._url = 'http://jservice.io/api/'
	}

	_makeRequest(url, callback){
		url = this._url + url;
		request(url, function(err, response, json){
			callback(err, response, JSON.parse(json));
		});
	}	

	clues(options, callback){
		var url = 'clues?' + qs.stringify(options);
		this._makeRequest(url, callback);
	}

	random(count, callback){
		count = count || 100;
		count = count > 100 ? 100 : count;
		var url = 'random?' + qs.stringify({'count' : count});
		this._makeRequest(url, callback);
	}

	categories(options, callback){	
		options.count = count || 100; 
		options.count = count > 100 ? 100 : count;
		var url = 'categories?' + qs.stringify(options);
		this._makeRequest(url, callback);
	}

	category(id, callback){
		var url = 'category?' + qs.stringify({'id' : id});
		this._makeRequest(url, callback);
	}

	invalid(id, callback){
		var url = 'invalid?' + qs.stringify({'id' : id});
		this._makeRequest(url, callback);
	}
}

var js = new jService();
module.exports = js;
