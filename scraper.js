const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .click('input[value= "Google Search"]')
  .click('.rc >.r >a')
  .then(console.log)
  .catch(error =>{
    console.error('fail')
  })
