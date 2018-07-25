const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false , executionTimeout: 100000})
const fs = require('fs');


nightmare
.goto('https://www.google.com')
.type('#lst-ib', 'datatables')
.click('input[value= "Google Search"]')
.click('.rc >.r > a')
.select('select[name="example_length"]', "100")

.evaluate(function () {
const headerFields = document.querySelectorAll("#example thead tr th")
const peopleRows = document.querySelectorAll("#example tbody tr");

const peopleList = Array.from(peopleRows).map(peopleRow => Array.from(peopleRow.children).map(entry => entry.innerText).join(","));
const people = peopleList.join('\n');
const header = Array.from(headerFields).map(headerEntry => headerEntry.innerText)

return [header, people].join('\n')
})

.end()

.then(result => fs.writeFile('./Resultfile.csv', result, 'utf8', function (err) {
if (err) throw err;
console.log('your file is saved as Resultfile.csv')
}))
.catch((err) => {
console.error(err);
});

