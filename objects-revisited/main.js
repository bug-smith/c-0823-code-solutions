const business = {
  opens: '8:30 am',
  closes: '4:30 pm',
  totalEmployees: 6,
  daysOpen: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  employees: {
    bug: { position: 'IT guy', daysOfWeekWorking: ['Monday', 'Tuesday'] },
    justin: { position: 'EL PRESIDENTE', daysOfWeekWorking: ['Monday'] },
    dave: { position: 'CEO', daysOfWeekWorking: ['Friday'] },
    michael: { position: 'VP', daysOfWeekWorking: ['Thursday'] },
    spencer: {
      position: 'ADESK',
      daysOfWeekWorking: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    },
    mark: {
      position: 'ops-manager',
      daysOfWeekWorking: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    },
  },
};

console.log(business);

function addWeekends() {
  const { daysOpen, employees } = business;
  for (const employeesName in employees) {
    const daysWorkingPeople = employees[employeesName].daysOfWeekWorking;
    daysWorkingPeople.push('Saturday', 'Sunday');
  }
  daysOpen.push('Saturday', 'Sunday');
}

addWeekends();

function addEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.typicode.com/users`);
  xhr.responseType = 'json';
  // xhr.addEventListener('load', () => {
  //   const length = xhr.length

  //   console.log(xhr.response)
  // })
  xhr.send();
}
addEmployees();
