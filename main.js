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