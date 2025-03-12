const company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    inner: {
      someworkers: [{name: 'Bilbo', salary: 5}, {name: 'Fred', salary: 5}]
    },
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Alex', salary: 1300}],
  }
}

function getSumSalaries(company) {
  let totalSum = 0;

  for (const unit in company) {
    if (Array.isArray(company[unit])) {
      for (const person of company[unit]) {
        totalSum += person.salary;
      }

      console.log(totalSum);
    } else {
      totalSum += getSumSalaries(company[unit]);
    }
  }

  return totalSum;
}

console.log(getSumSalaries(company));