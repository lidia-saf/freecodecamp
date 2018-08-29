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
      result.push(numberBuffer.join(""));
      numberBuffer = [];
    }
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
        result.push(char);
      }
    });
    if (numberBuffer.length) {
      emptyNumberBufferAsLiteral();
    }
    return result;
  }
  console.log(finalResult);
  // let's find * and calculate it
  if(finalResult.indexOf("/") >= 0 ) {
    let index = finalResult.indexOf("/");
    if(finalResult[index-1] === "+" || finalResult[index-1] === "*" || finalResult[index-1] === "-") {
      let midResult = finalResult[index-2] / finalResult[index + 1];
      finalResult.splice(index-2, 4, midResult);
      console.log(finalResult);
    }
    let midResult = finalResult[index-1] / finalResult[index + 1];
    finalResult.splice(index-1, 3, midResult);
    console.log(finalResult);
  }
  if (finalResult.indexOf("*") >= 0) {
    let index = finalResult.indexOf("*");
    if(finalResult[index-1] === "/" || finalResult[index-1] === "+" || finalResult[index-1] === "-") {
      let midResult = finalResult[index-2] * finalResult[index + 1];
      finalResult.splice(index-2, 4, midResult);
      console.log(finalResult);
    }
    let midResult = finalResult[index-1] * finalResult[index + 1];
    finalResult.splice(index-1, 3, midResult);
    console.log(finalResult);
  }
  if (finalResult.indexOf("-") >= 0) {
    let index = finalResult.indexOf("-");
    if(finalResult[index-1] === "+" || finalResult[index-1] === "*" || finalResult[index-1] === "/") {
      let midResult = Number(finalResult[index-2]) - Number(finalResult[index + 1]);
      finalResult.splice(index-2, 4, midResult);
      console.log(finalResult);
    }
    let midResult = Number(finalResult[index-1]) - Number(finalResult[index + 1]);
    finalResult.splice(index-1, 3, midResult);
    console.log(finalResult);
  }
  if (finalResult.indexOf("+") >= 0) {
    let index = finalResult.indexOf("+");
    if(finalResult[index-1] === "/" || finalResult[index-1] === "*" || finalResult[index-1] === "-") {
      let midResult = Number(finalResult[index-2]) + Number(finalResult[index + 1]);
      finalResult.splice(index-2, 4, midResult);
      console.log(finalResult);
    }
    let midResult = Number(finalResult[index-1]) + Number(finalResult[index + 1]);
    finalResult.splice(index-1, 3, midResult);
    console.log(finalResult);
  }
  return finalResult[0].toString();
}






export default reducer;