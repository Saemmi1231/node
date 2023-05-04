const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end()
})


function count(type) {
    const resultElement = document.getElementById('result');

    let number = resultElement.value;
        console.log(number)

    if(type === 'plus'){
        number = parseInt(number) + 1;
        console.log(number)
    } else if( type === 'minus' && number > 0){
        number = parseInt(number) - 1;
    }
    resultElement.value = number;
}
console.log("start")
