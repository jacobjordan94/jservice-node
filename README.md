# jservice-node
Node wrapper for accessing jservice.io

## Installation
```
npm install jservice-node
```

## Setup
```javascript
var js = require('jservice-node');
```

## Methods 

Please read the official documentation at <a href="http://jservice.io">jservice.io</a>

### clues(options, callback)
```javascript
var options = {
	value: 200,
	category: 11502,
};
js.clues(options, function(error, response, json){
	if(!error && response.statusCode == 200){
		console.dir(json);
	} else {
		console.log(`Error: ${response.statusCode}`);
	}
});
```
_Outputs_
```
[{
    id: 87665,
    answer: 'the Penguin',
    question: 'Burgess Meredith as this odd bird',
    value: 200,
    airdate: '2009-07-23T12:00:00.000Z',
    created_at: '2014-02-14T01:53:20.179Z',
    updated_at: '2014-02-14T01:53:20.179Z',
    category_id: 11502,
    game_id: null,
    invalid_count: null,
    category: {
        id: 11502,
        title: 'batman tv villains',
        created_at: '2014-02-14T01:53:20.027Z',
        updated_at: '2014-02-14T01:53:20.027Z',
        clues_count: 5
    }
}]
```

### random(count, callback)
```javascript
js.random(2, function(error, response, json){
	if(!error && response.statusCode == 200){
		console.dir(json);
	} else {
		console.log(`Error: ${response.statusCode}`);
	}
});
```
_Outputs_
```
[{
    id: 44377,
    answer: 'Beetle',
    question: 'Also a classic Volkswagen, it\'s the insect with the greatest number of species',
    value: 100,
    airdate: '2001-02-16T12:00:00.000Z',
    created_at: '2014-02-11T23:12:36.463Z',
    updated_at: '2014-02-11T23:12:36.463Z',
    category_id: 35,
    game_id: null,
    invalid_count: null,
    category: {
        id: 35,
        title: 'insects',
        created_at: '2014-02-11T22:47:23.318Z',
        updated_at: '2014-02-11T22:47:23.318Z',
        clues_count: 75
    }
}, {
    id: 44378,
    answer: 'Dalai Lama',
    question: 'In 1959 this spiritual leader of Tibet fled to exile in India',
    value: 100,
    airdate: '2001-02-16T12:00:00.000Z',
    created_at: '2014-02-11T23:12:36.485Z',
    updated_at: '2014-02-11T23:12:36.485Z',
    category_id: 181,
    game_id: null,
    invalid_count: null,
    category: {
        id: 181,
        title: 'the 1950s',
        created_at: '2014-02-11T22:47:50.004Z',
        updated_at: '2014-02-11T22:47:50.004Z',
        clues_count: 25
    }
}]
```

### categories(options, callback)
```javascript
var options = {
	count: 5,
	offset: 25
};
js.categories(options, function(error, response, json){
	if(!error && response.statusCode == 200){
		console.dir(json);
	} else {
		console.log(`Error: ${response.statusCode}`);
	}
});
```
_Outputs_
```
[{
    id: 11515,
    title: "that's just ducky",
    clues_count: 5
}, {
    id: 11516,
    title: "parts",
    clues_count: 5
}, {
    id: 11517,
    title: "say it in latin",
    clues_count: 5
}, {
    id: 11501,
    title: "east asia",
    clues_count: 5
}, {
    id: 11502,
    title: "batman tv villains",
    clues_count: 5
}]
```
### category(id, callback)
```javascript
js.category(11502, function(error, repsonse, json){
	if(!error && response.statusCode == 200){
		console.dir(json);
	} else {
		console.log(`Error: ${response.statusCode}`);
	}
});
```
_Outputs_
```
{
    id: 11502,
    title: "batman tv villains",
    clues_count: 5,
    clues: [{
        id: 87665,
        answer: "the Penguin",
        question: "Burgess Meredith as this odd bird",
        value: 200,
        airdate: "2009-07-23T12:00:00.000Z",
        category_id: 11502,
        game_id: null,
        invalid_count: null
    }, {
        id: 87671,
        answer: "Catwoman",
        question: "Julie Newmar, Eartha Kitt & Lee Meriwether as this purr-fect villain (not all at the same time)",
        value: 400,
        airdate: "2009-07-23T12:00:00.000Z",
        category_id: 11502,
        game_id: null,
        invalid_count: null
    }, {
        id: 87677,
        answer: "the Riddler",
        question: "Frank Gorshin as this puzzling criminal",
        value: 600,
        airdate: "2009-07-23T12:00:00.000Z",
        category_id: 11502,
        game_id: null,
        invalid_count: null
    }, {
        id: 87683,
        answer: "the Joker",
        question: "Cesar Romero as this kooky cutup",
        value: 800,
        airdate: "2009-07-23T12:00:00.000Z",
        category_id: 11502,
        game_id: null,
        invalid_count: null
    }, {
        id: 87689,
        answer: "King Tut",
        question: "Victor Buono as this felonious pharaoh",
        value: 1000,
        airdate: "2009-07-23T12:00:00.000Z",
        category_id: 11502,
        game_id: null,
        invalid_count: null
    }]
}
```
