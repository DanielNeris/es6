const arr = [1, 3, 4, 5, 8, 9];

//percorrer todo vetor
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

//consumir todo vetor e retorno uma variavel
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

//filtra os valores do array e retorna algo
//nesse caso apenas os numeros pares
//retorna true ou false
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

//encontrar informação dentro do array
//retorna true ou false
const find = arr.find(function(item) {
    return item >= 4;
});

console.log(find);