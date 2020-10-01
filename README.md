# weather application using OpenWeatherMap API
### View result here : [link](https://weather-api-example.herokuapp.com/)

* ### [The application's features](#the-applications-features-)
* ### [Development process](#development-process-1)	
* ### [Programming concepts applied](#programming-concepts-applied-1)

# The application's features :
* Enter the city of your choice to get the weather of the day.
* Check the type of the input's value (for security) before sending it.
* Send a POST request to the OpenWeatherMap API.
* Fetch the response asynchronously.
# Development process:
 * Create a Form Object in Javascript to handle the HTML form and validate it before submitting it.
* Create a PHP function to check the retrieved input value on the backend.
* Call the OpenWeatherMap API using the input's value as a specific query in PHP .
* Convert the result to the JSON format.
* Fetch the result using AJAX.

# Programming concepts applied:
JavaScript | PHP
---------- |----------
Object     | Superglobals $_POST
JSON  | @get_headers
XMLHttpRequest | PHP fileSystem file_get_contents
Regex | JSON
DOM Document | condition (if/else)
DOM method setAttributes| Associative Array
DOM method createELement | string function trim()
DOM method insertBefore | string function htmlspecialchars()
DOM method createTextNode |
Loop for |
Condition (if/else)|
classList methods |
Classes ES6 |



