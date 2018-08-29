import { ADD_INPUT, CLEAR_INPUT, PRODUCE_RESULT } from '../actions';
import { initialState } from '../index';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      let newValue = processInput(state, action.payload);
      console.log(newValue);
      return Object.assign({}, state, {input: newValue});
    case CLEAR_INPUT:
      return Object.assign({}, state, {input: action.payload});
    case PRODUCE_RESULT:
      let result = calculateResult(state);
      console.log(result);
      return Object.assign({}, state, {input: result});
    default:
      return state;
  }
}

function processInput(state, value) {
  if (state.input === "0") {
    return value;
  }
  let array = [];
  array.push(state.input);
  array.push(value);
  console.log(array);
  let string = array.join("");
  return string;
}

function calculateResult(state) {
  let input = state.input;
  let numberBuffer = [];
  let result = []
  let finalResult = tokenize(input);
  function isDigit(ch) {
    return /\d/.test(ch);
  }
  function isOperator(ch) {
    return /\+|-|\*|\//.test(ch);
  }
  // function isDot(ch) {
  //   return (ch === ".");
  // }
  function emptyNumberBufferAsLiteral() {
    if(numberBuffer.length) {
      console.log(numberBuffer + "here it is");
      console.log(result);
      result.push(new Token("Literal", numberBuffer.join("")));
      numberBuffer = [];
    }
  }
  function Token(type, value) {
    this.type = type;
    this.value = value;
  }
  function tokenize(str) {
    str = str.split("");
    str.forEach(function(char, idx) {
      if(isDigit(char)) {
        numberBuffer.push(char);
      } else if (char === ".") {
        numberBuffer.push(char);
      } else if (isOperator(char)) {
        emptyNumberBufferAsLiteral();
        result.push(new Token("Operator", char));
      }
    });
    if (numberBuffer.length) {
      emptyNumberBufferAsLiteral();
    }
    return result;
  }
  let outQueue = [];
  let opStack = [];
  let assoc = {
    "*": "left",
    "/": "left",
    "+": "left",
    "-": "left"
  };
  let prec = {
    "*": 3,
    "/": 3,
    "+": 2,
    "-":2
  };
  Token.prototype.precedence = function() {
    return prec[this.value];
  }
  Token.prototype.associativity = function() {
    return assoc[this.value];
  }
  Array.prototype.peek = function() {
    return this.slice(-1)[0];
  }
  console.log(finalResult);
  finalResult.forEach(function(v) {
    if(v.type === "literal") {
      outQueue.push(v);
    } else if(v.type === "Operator") {
      while (opStack.peek() && (opStack.peek().type === "Operator") && ((v.associativity() === "left" && v.precedence() <= opStack.peek().precedence())
      || (v.associativity() === "right" && v.precedence() < opStack.peek().precedence()))) {
        outQueue.push(opStack.pop());
      }
      opStack.push(v);
    }
  })
  console.log(outQueue.concat(opStack.reverse()));
  return state.input;
}






export default reducer;