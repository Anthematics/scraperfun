const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false  })
let fs = require('fs');
nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .click('input[value= "Google Search"]')
  .click('.rc >.r > a')
  .select('select[name="example_length"]',"100")


  .evaluate(function() {
    const peopleList = document.querySelectorAll("th,td");
    const peopleArray = [...peopleList]
    const people = peopleArray.map(personEntry => personEntry.innerText)
    //fs.writeFileSync('results/personnel.csv', JSON.stringify(people), 'utf8');
    return people
  })
  .end()
  .then(console.log)
  .catch(error =>{
    console.error('fail')
  })

