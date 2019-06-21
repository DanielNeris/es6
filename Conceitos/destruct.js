const user = {
    name: 'Daniel',
    year: 20,
    address: {
        city: 'Barra Bonita',
        state: 'SP',
    },
};

const {name, year, address: {city}} = user;

console.log(user);
console.log(name);
console.log(year);
console.log(city);

function showName({name, year}) {
    console.log(name, year);
}

showName(user)