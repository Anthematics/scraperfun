const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })
const fs = require('fs');


nightmare
    .goto('https://www.google.com')
    .type('#lst-ib', 'datatables')
    .click('input[value= "Google Search"]')
    .click('#search a')
    .select('select[name="example_length"]', "100")


    .evaluate(function () {
        const returnTable = [];
        const returnClasses = [];
        returnTable.push([...document.querySelectorAll("#example thead tr th")].map(th => th.innerText));
        [...document.querySelectorAll("#example tbody tr")].map(personEntry => {
            const personColumns = [...personEntry.querySelectorAll("td")]
                .map(p => {
                    returnClasses.push(p.innerText);
                    return p.innerText;
                });
            returnTable.push(personColumns);
        });

        return returnTable;
    })

    .end()
    .then((people) => {
        var outStr = people.map(person => {
            var row = person.map(p => {
                if (p !== undefined && p !== null) {
                    return `"${p}"`;
                }
            }).join(",");
            return row;
        }).join("\n");
        fs.writeFile('test.csv', outStr, 'utf8', function (err) {
            if (err) {
                console.error('File not saved or corrupt');
            } else {
                console.log('your file is saved')
            }
        })
    })
    .catch(error => {
        console.error(error);
    })