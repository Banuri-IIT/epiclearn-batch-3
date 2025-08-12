{ () =>
    {document.addEventListener("DOMContentLoaded"),() =>
    {
        var myData1;
        console.log("DOM is ready")
    }
    }
    console.log("Here!");
}


var user_email = " epiclearn@gmial.com"
//Here is the inline Comment.

/* here is the 
multiline comment*/

// abcd
// abcd  ctrl+/
// abcd
// abcd

//Variable Declaration with var
// Global variable.SCope through ,access in anywhere

var message;

//Let and const can be scoped locally and functionally/redeclare
//Local Scoping
{
//variable declaration with let
let message2; 

//variable declaration with const(empty variable ekak declare kranna ba)
const message3 ="Hello I'm Const variable"
}

//Function Block
function myFunction(){
    let myVariable = 5000;
    return myVariable;
    //console.log("LOG:",myVariable)
}
//Later Initialization..
message = "Hello World!"
message2 ="Hello World!"
//console.log("LOG:",message);

console.log("LOG:",myFunction());

//Different between const and let
// const can't redeclare and can't re asign the values
//leet ekedi value eka change karanna puluwn

//Conditional Block
if(true){
    let message2 = "I'm blocked-scoped variable"
    var message =" 123 "
    console.log("IF :",message2)

    //var user_email = " banuri@gmial.com"
}
