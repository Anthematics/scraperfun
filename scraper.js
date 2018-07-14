const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
let fs = require('fs');

nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .click('input[value= "Google Search"]')
  .click('.rc >.r > a')

  .evaluate(function() {
    let returnedData = [];
    const h1 = document.querySelector('h1')
    h1.innerHTML = "this works"
  })

  .then(console.log)
  .catch(error =>{
    console.error('fail')
  })

/* b)You will find a table example with some data.
    Please fetch/extract data from table into array.
    In the array you will have objects.
    An object will be a row from the table.
    The object properties will be data from every table column.
    Hint: Many javascript scraping frameworks like Puppetteer and
    Nightmare implement a .evaluate which would allow you to use
    .map(function(){ // return object with data }).toArray() from Jquery.

    c)Please export the array as a CSV */
