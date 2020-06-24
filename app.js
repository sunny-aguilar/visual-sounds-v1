

(function () {




    console.log('Testing node');
    let x = 10;
    let y = 20;
    let z = x + y;
    console.log(z);
    console.log('Sweet!');

    let message = 'Hello World!';
    console.log(message);

    let total = (num) => num + 5;
    console.log(total(5));


    // simple server
    // var http = require("http");
    // http.createServer(function (request, response) {
    //     // Send the HTTP header
    //     // HTTP Status: 200 : OK
    //     // Content Type: text/plain
    //     response.writeHead(200, {'Content-Type': 'text/plain'});

    //     // Send the response body as "Hello World"
    //     response.end('<h1>Hello World</h1>\n');
    // }).listen(8081);

    // // Console will print the message
    // console.log('Server running at http://127.0.0.1:8081/');


}());





