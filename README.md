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

<div>
		<h4>clues</h4>
		<ul>
      <li>Callback: <code>function(error, response, json){}</code></li>
			<li>Options: <small class="text-warning">All options are optional</small>:
				<ul>
					<li><code>value</code>(int): the value of the clue in dollars</li>
					<li><code>category</code>(int): the id of the category you want to return</li>
					<li><code>min_date</code>(date): earliest date to show, based on original air date</li>
					<li><code>max_date</code>(date): latest date to show, based on original air date</li>
					<li><code>offset</code>(int): offsets the returned clues. Useful in pagination</li>
				</ul>
		</li></ul> 
		<h4>random</h4>
		<ul>
			<li>Callback: <code>function(error, response, json){}</code></li>
			<li>Options:
				<ul>
					<li><code>count</code>(int): amount of clues to return, limited to 100 at a time</li>
				</ul>
		</li></ul>
		<h4>categories</h4>
		<ul>
			<li>Callback: <code>function(error, response, json){}</code></li>
			<li>Options:
				<ul>
					<li><code>count</code>(int): amount of categories to return, limited to 100 at a time</li>
					<li><code>offset</code>(int): offsets the starting id of categories returned. Useful in pagination.</li>
				</ul>
		</li></ul>
		<h4>category</h4>
		<ul>
			<li>Callback: <code>function(error, response, json){}</code></li>
			<li>Options:
				<ul>
					<li><code>id</code>(int): <span class="text-warning">Required</span> the ID of the category to return.</li>
				</ul>
		</li></ul>
        <h4>invalid</h4>
		<ul>
			<li>Callback: <code>function(error, response, json){}</code></li>
			<li>Options:
				<ul>
					<li><code>id</code>(int): <span class="text-warning">Required</span> the ID of the clue to mark as invalid. <br>
                                <p>Please mark a clue as invalid when the needed information is not present in the clue. This sometimes happens when clues rely on images or sounds to be answered. When using jService, you may want to check the invalid_count attribute on clues before using them.</p>
                    </li>
				</ul>
        
		</li></ul>
</div>
