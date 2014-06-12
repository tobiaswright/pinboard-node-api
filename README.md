# Pinboard Node API

Node npm for pinboard.in

This is just a partial implementation of the api. The rest of the API will be wired up in the future.

## Getting Started
Install the module with: `npm install pinboard-api`

```javascript
var pin = require('pinboard-api');

### Get Access Token

pin.getAcessToken( user, password, function() {
	console.log( data )
	//returns access_token
});

### Get Recent Post

pin.getRecent( user, access_token, options, function() {
	console.log( data )
});
```
'options' is an optional parameter and needs to be an object using the parameters of the pinboard.in [post_recent](https://pinboard.in/api#posts_recent) method

```
options = {
	tag: "tag1,tag2,tag3",
	count: 5,
	....
}
```

### Get All Post

```
pin.getAll( user, access_token, options, function() {
	console.log( data )
});

```
'options' is an optional parameter and needs to be an object using the parameters of the pinboard.in [post_all](https://pinboard.in/api#posts_all) method

```
options = {
	tag: "tag1,tag2,tag3",
	count: 5
}
```

## License
Copyright (c) 2014 Tobias Wright. Licensed under the MIT license.
