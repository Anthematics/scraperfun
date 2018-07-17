const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true  })




// 1.  Return ID of search input field from google.com page using javascript


// 2.  Return value of "title" attribute of search input from google.com using javascript


// 3.  Return value of "title" attribute of search input from google.com using jquery


// 4.  a. Type manually "test" into search input at google.com
//     b. Retrieve and save in a variable value of input search field
//     c. Append the string " robot" the the variable from step b
//     d. Set input search field value to variable from previous step


// 5.  Click on Search Button using javascript


// 6.  a. Filter all search results and store them into an array variable
//     b. Display all href attributes from array created at a.



// 8. The following code must be implemented with JS6. We have a class named 'Work'.
// In this class we need to declare a function. Create asynchronous function
//(You can choose the name of the function). The function will get 1 parameter. (nightmare).
//     We assume that there are declared 3 function named (log in,statement,fetch).
//The first and the second function will accept 1 parameter.
//     In the function body:
//     a). Functions that accept parameter need to be invoked with nightmare as parameter.
//     b). Every function must be called in serial (Every function depend on the previous
//         called function). The asynchronous function have a special keyword that you can use for it.
//     c). In this class there is a method named 'success'. It accept one parameter '
//         message'. Please return this method with a message.

class Work {

}


// 9. The following code must be implemented with Nightmare.js.
//     a). Navigate to Google page.
//     b). Search for 'W3Schools'.
//     c). In the first result page navigate on each link and check if
// the title from the result is the same with the title on website page.
//     Hint: You can use evaluate method from Nightmare and return data from the page.
//You can include bluebird.js -> Promise.each method to iterate serially.
nightmare
.goto('https://www.google.com/')
.type('#lst-ib', 'w3schools')
