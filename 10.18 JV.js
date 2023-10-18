//1

function printHello() {
    console.log('Hello');
}
printHello();


//2
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


//3
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage); 
}
printMessage();
