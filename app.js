

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

    http.createServer(function (request, response) {
        // Send the HTTP header
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/plain'});

        // Send the response body as "Hello World"
        response.end('Hello World\n');
    }).listen(8081);


}());





