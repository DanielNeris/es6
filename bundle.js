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

console.log(test(10)); //retornar com valores padroes

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma(3));
console.log(soma(null, 3)); //Template Literals

var name = 'Daniel';
var year = 20;
console.log("Meu nome \xE9 ".concat(name, " e tenho ").concat(year, "."));
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
"use strict";

var arr = [1, 2, 3, 4, 6, 9, 12];
var newArr = arr.map(function (item) {
  return item + 1;
});
console.log(newArr); //usar () para retornar obj

var test = function test() {
  return {
    name: 'Daniel'
  };
};

console.log(test());
"use strict";

var user = {
  name: 'Daniel',
  year: 20,
  address: {
    city: 'Barra Bonita',
    state: 'SP'
  }
};
var name = user.name,
    year = user.year,
    city = user.address.city;
console.log(user);
console.log(name);
console.log(year);
console.log(city);

function showName(_ref) {
  var name = _ref.name,
      year = _ref.year;
  console.log(name, year);
}

showName(user);
"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST
var user = {
  name: 'Daniel',
  year: 20,
  company: 'none'
};

var name = user.name,
    rest = _objectWithoutProperties(user, ["name"]);

console.log(name);
console.log(rest);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sum(1, 2, 4)); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var user2 = {
  name: 'Daniel',
  year: 20,
  company: 'none'
};

var user3 = _objectSpread({}, user2, {
  company: 'ieCompany'
});

console.log(user3);
