const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://www.google.com/')
  .type('#lst-ib', 'datatables')
  .then(console.log)

  .catch(error =>{
    console.error('fail')
  })
