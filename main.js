class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList  extends List{
    constructor() {
        //chama o constructor da classe pai
        super();

        this.user = "Daniel";
    }

    showUser() {
        console.log(this.user);
    }
}

const MyList = new TodoList();

document.getElementById('newtodo').onclick = function() {
    MyList.add('Novo Todo');
}

MyList.showUser();

//static

class TodoListStatic {
    static addTodoStatic(a, b) {
        return a + b;
    }
}

console.log(TodoListStatic.addTodoStatic(2, 10));

//const & let

// variaveis que recebem mutação
const user = { name: 'Daniel' };

user.name = 'Any';

console.log(user);

// variaveis de escopo
function test(x) {
    let y = 2;

    if(x > 5) {
        console.log(x, y);
    }
}

console.log(test(10));

//retornar com valores padroes

const soma = (a = 1, b = 2) => a + b;
console.log(soma(3));
console.log(soma(null,3));