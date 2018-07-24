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
const headerFields = document.querySelectorAll("th,td")
const peopleArray = []
const peopleList = document.querySelectorAll("#example tbody tr");
const people = Array.from(peopleList).map(entry => [...entry.querySelectorAll("td")]
    .map(salaryData => {
        peopleArray.push(salaryData.innerText)
        return salaryData.innerText;
    }));
    peopleArray.push(people)
    const header = Array.from(headerFields).map(headerEntry => headerEntry.innerText)
    return [header, peopleArray].join('\n')
})

.end()

.then(result => fs.writeFile('./Resultfile.csv', result, 'utf8', function (err) {
if (err) throw err;
console.log('your file is saved as Resultfile.csv')
}))
.catch((err) => {
console.error(err);
});

