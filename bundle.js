"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    //chama o constructor da classe pai
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.user = "Daniel";
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.user);
    }
  }]);

  return TodoList;
}(List);

var MyList = new TodoList();

document.getElementById('newtodo').onclick = function () {
  MyList.add('Novo Todo');
};

MyList.showUser(); //static

var TodoListStatic =
/*#__PURE__*/
function () {
  function TodoListStatic() {
    _classCallCheck(this, TodoListStatic);
  }

  _createClass(TodoListStatic, null, [{
    key: "addTodoStatic",
    value: function addTodoStatic(a, b) {
      return a + b;
    }
  }]);

  return TodoListStatic;
}();

console.log(TodoListStatic.addTodoStatic(2, 10)); //const & let
// variaveis que recebem mutação

var user = {
  name: 'Daniel'
};
user.name = 'Any';
console.log(user); // variaveis de escopo

function test(x) {
  var y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}

console.log(test(10));
"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //percorrer todo vetor

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //consumir todo vetor e retorno uma variavel

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //filtra os valores do array e retorna algo
//nesse caso apenas os numeros pares
//retorna true ou false

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //encontrar informação dentro do array
//retorna true ou false

var find = arr.find(function (item) {
  return item >= 4;
});
console.log(find);
