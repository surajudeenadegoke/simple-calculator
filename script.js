const appendToDisplay = (input) => {
  document.getElementById("display").value += input;
};

const calculate = () => {
  var expression = document.getElementById("display").value;
  console.log(expression);
  var result = eval(expression);
  document.getElementById("display").value = result;
};

const clearDisplay = () => {
    document.getElementById("display").value =""
};