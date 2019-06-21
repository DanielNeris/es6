//REST

const user = {
    name: 'Daniel',
    year: 20,
    company: 'none'
}

const { name, ...rest } = user;

console.log(name);
console.log(rest);

const arr = [1, 2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

const sum = (...params) => params.reduce((total, next) => total + next);

console.log(sum(1, 2, 4));

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const user2 = {
    name: 'Daniel',
    year: 20,
    company: 'none',
};

const user3 = { ...user2, company: 'ieCompany' };

console.log(user3);