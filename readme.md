Notes
REST(Representational State Transfer) API
A standart way to send and receive data over internet.
There are a few different types of REST APIs. Let’s look at the ones you will use in most cases.
```
HTTP methods
GET : used to get data.
POST : used to add/update data.
PUT : update/replace exisiting data.
DELETE : delete data on the server side.

```

```
HTTP Response
Any data you get back from the server after a successful / failed request.
HTTP Response Codes
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:
```

```
Informational responses (100–199),
Successful responses (200–299),
Redirects (300–399),
Client errors (400–499),
Server errors (500–599).
200 - OK
201 - Created
202 - Accepted
404 - Not Found
405 - Method Not allowed
408 - Request Timed out
500 - Internal Server Error
503 - Service unavailable
XMLHttpRequest(XHR)
Before JSON took over the world, the primary format of data exchange was XML. XMLHttpRequest() is a JavaScript function that made it possible to fetch data from APIs that returned XML data.
```
```js
// function to handle success
function success() {
    var data = JSON.parse(this.responseText); //parse the string to JSON
    console.log(data);
}

// function to handle error
function error(err) {
    console.log('Request Failed', err); //error details will be in the "err" object
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error;  // call error function if request failed
xhr.open('GET', 'https://api.github.com/users/riteshf'); // open a GET request
xhr.send(); // send the request to the server.
```
FETCH API
The Fetch API is a simpler, easy-to-use version of XMLHttpRequest to consume resources asynchronously. Fetch lets you work with REST APIs with additional options like caching data, reading streaming responses, and more.

The major difference is that Fetch works with promises, not callbacks. JavaScript developers have been moving away from callbacks after the introduction of promises.

## GET Request

```js
fetch('http://localhost:3000/posts')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err));
```

can also be written as
```js
fetch("http://localhost:3000/posts", {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
```
## POST request
```js
let _data = {
   "title": "json-server",
   "author": "my name"
};

fetch("http://localhost:3000/posts", {
  method: "POST",
  body: JSON.stringify(_data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
```
## PUT request
```js
// data to be sent to the POST request

let _data = {
   "title": "json-server",
   "author": "my name"
};

fetch("http://localhost:3000/posts/1", {
  method: "PUT",
  body: JSON.stringify(_data),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
  ```

```js
DELETE request
// data to be sent to the POST request
fetch("http://localhost:3000/posts/1", {
  method: "DELETE",
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

```
Query Params
You can pass filters in URL using Query params
```js
fetch('http://localhost:3000/posts?title=json-server')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err));
```
Explore More
Json Server
