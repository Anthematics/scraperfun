const people = Array.from(peopleList).map(entry => entry.querySelectorAll("td")
    .map(salaryData => {
        people.push(salaryData.innerText)
        return salaryData.innerText;
    });

    [...document.querySelectorAll("#example tbody tr")].map(personEntry => {
            const personColumns = [...personEntry.querySelectorAll("td")]
                .map(p => {
                    returnClasses.push(p.innerText);
                    return p.innerText;
                });
            returnTable.push(personColumns);
        });
