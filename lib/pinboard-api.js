/*
 * pinboard-api
 * https://github.com/tobiaswright/pinboard-api
 *
 * Copyright (c) 2014 Tobias Wright
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');

var config = {
	url : {
		access_token : "https://api.pinboard.in/v1/user/api_token/",
		get_recent : "https://api.pinboard.in/v1/posts/recent",
		get_all : "https://api.pinboard.in/v1/posts/all"
	}
}

var getAcessToken = function( user, password, callback ) {

	var url = config.url.access_token;
	var urlChop = url.slice(8);
	var newUrl = "https://"+user+":"+password+"@"+urlChop;

	var options = {
		qs: {
			format: "json"
		},
		url: newUrl
	}

	console.log(newUrl)

	request.post(options, function (error, response, body) {
		callback(body);
	});
}

var getRecent = function( user, access_token, optional, callback ) {

	var authString = user+":"+access_token;

	var options = {
		qs: {
			auth_token: authString,
			format: "json"
		},
		url: config.url.get_recent
	}

	if (arguments.length === 3) {
		if (Object.prototype.toString.call(optional) == "[object Function]") {
			callback = optional; 
		}
	} else {
		for (var prop in optional) {
			if (optional.hasOwnProperty(prop)) {
				options.qs[prop] = optional[prop];
			}
		}
	}

	request.get(options, function (error, response, body) {
		callback( body );
	});
}

var getAll = function( user, access_token, optional, callback ) {

	var authString = user+":"+access_token;

	var options = {
		qs: {
			auth_token: authString,
			format: "json"
		},
		url: config.url.get_all
	}

	if (arguments.length === 3) {
		if (Object.prototype.toString.call(optional) == "[object Function]") {
			callback = optional; 
		}
	} else {
		for (var prop in optional) {
			if (optional.hasOwnProperty(prop)) {
				options.qs[prop] = optional[prop];
			}
		}
	}

	request.get(options, function (error, response, body) {
		callback( body );
	});
}

module.exports = {
	getAcessToken: getAcessToken,
	getRecent: getRecent,
	getAll: getAll
}