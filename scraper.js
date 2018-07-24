const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false  })
const fs = require('fs');


nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .click('input[value= "Google Search"]')
  .click('.rc >.r > a')
  .select('select[name="example_length"]',"100")


  .evaluate(function() {
    const headerFields = document.querySelectorAll("#example thead tr th")
    const peopleList = document.querySelectorAll("#example tbody tr");
    const people = Array.from(peopleList).map(entry => entry.innerText.replace(/\t/g, ','))
    const header = [...headerFields].map(headerEntry => headerEntry.innerText)

    return {
      log: header,
      list: people
    }
  })

  .end()

  .then(result => fs.writeFile('testfile.csv',JSON.stringify(result),'utf8', function(err) {
    if (err) {
      console.log('File not saved or corrupt');
    } else {
      console.log('your file is saved')
    }
  }))
  .catch(error =>{
    console.error('fail')
  })