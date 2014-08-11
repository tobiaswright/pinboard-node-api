# Pinboard Node API

Node npm for pinboard.in

This is just a partial implementation of the api. The rest of the API will be wired up in the future.

## Getting Started
Install the module with: `npm install pinboard-api`

```javascript
var pin = require('pinboard-api');
```

### Get Access Token

```javascript

var required = {user: "username", password: "password"};

pin.getAcessToken( required, function() {
	console.log( data )
	//returns access_token
});
```

### Get Update

```javascript

var required = {user: "username", password: "password"};

pin.getAcessToken( required, function() {
	console.log( data )
	//returns time of last update
});
```

More info on [update](https://pinboard.in/api#posts_update) method

### Get Recent Post

```javascript

var required = {user: "username", token: "access_token"};

pin.getRecent( required, options, function() {
	console.log( data );
	//returns recent post
});
```
'options' is an optional parameter and needs to be an object using the parameters of the pinboard.in [post_recent](https://pinboard.in/api#posts_recent) method

```javascript
options = {
	tag: "tag1,tag2,tag3",
	count: 5,
	....
}
```

### Get All Post

```javascript

var required = {user: "username", token: "access_token"};

pin.getAll( required, options, function() {
	console.log( data );
	//returns all post
});

```
'options' is an optional parameter and needs to be an object using the parameters of the pinboard.in [post_all](https://pinboard.in/api#posts_all) method

```javascript
options = {
	tag: "tag1,tag2,tag3",
	count: 5
}
```

## License
Copyright (c) 2014 Tobias Wright. Licensed under the MIT license.
