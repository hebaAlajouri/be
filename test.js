const express = require('express');
const app = express();


function comSum(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result += i;
    }
    return result;
}
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function subtraction(n){
    let arr=[];
    
for(let i=0;i<=10;i++){
    arr[i]=(i*num)

}return arr;
}

// Define the Fibonacci function using iteration
function fibonacci(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


app.get('/', function(req, res) {
    res.send("start server");
});

app.get('/user', function(req, res) {
    res.send("Heba");
});

// Route to calculate factorial
app.get('/fact/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const fact = factorial(num);
    res.json("fact is" + fact);
}); 
app.get('/Palindrome/:string',function(req,res)
{
    var Palindrome =isPalindrome(req.params.string)
    res.json(Palindrome)
});

app.get('/sum/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const sum = comSum(num);
    res.json("sum is" + sum);
});

// Route to calculate Fibonacci
app.get('/fib/:num', function(req, res) {
    const num = parseInt(req.params.num);
    const fib = fibonacci(num);
    res.json("fib is " + fib);
});
app.get('/sub/:num', function(req, res) {
    const num = parseInt(req.params.num);
     const sub = subtraction(num);
     res.json("subtraction:" +sub);
    
    
});

const server = app.listen(7000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening at http://${host}:${port}`);
});
