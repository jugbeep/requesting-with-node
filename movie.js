const getKeys = require('./env.js');
let thisKey = getKeys.key;
let thisId = getKeys.id;

const request = require("request"); //The actual request sending 

function get(movieTitle) {
	  
	request("https://www.googleapis.com/customsearch/v1?key=AIzaSyDWGdV-FgClb9y54efVAW9Bk7A6NO34kRw&cx=004889842627206894583:lyh25e0gr8o&q="+movieTitle+"", 
	function (error, response, body) {   //Inside that callback  
		var bodyData = JSON.parse(body);  
		console.log(bodyData.items[0].title);

		
});

};
module.exports=get;
