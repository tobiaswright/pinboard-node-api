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

var getAcessToken = function( req, callback ) {

	var url = config.url.access_token,
		urlChop = url.slice(8),
		newUrl = "https://"+req.user+":"+req.password+"@"+urlChop;

	var options = {
		qs: {
			format: "json"
		},
		url: newUrl
	}

	request.post(options, function (error, response, body) {
		callback(body);
	});
}

var getRecent = function( req, optional, callback ) {

	var authString = req.user+":"+req.token,
		args = [];

	var options = {
		qs: {
			auth_token: authString,
			format: "json"
		},
		url: config.url.get_recent
	}

	for (var i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}

	callback = args.pop();

	if (arguments.length > 1) {
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

var getAll = function( req, optional, callback ) {

	var authString = req.user+":"+req.token,
		args = [];

	var options = {
		qs: {
			auth_token: authString,
			format: "json"
		},
		url: config.url.get_all
	}

	for (var i = 0; i < arguments.length; i++) {
		args.push(arguments[i]);
	}

	callback = args.pop();

	if (arguments.length > 1) {
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