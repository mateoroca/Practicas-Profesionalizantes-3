

const buttonsNumber = document.querySelectorAll(".number-blue");
const buttonsNumberOpereitors = document.querySelectorAll(".operation-green");
const buttonEqual = document.querySelector("#equal");
const buttonDelete = document.querySelector("#delete");
const result = document.querySelector("#result");



let ActualOperation = '';

let PreviusOperation = '';

let operation = undefined;


buttonsNumber.forEach(function(button){
  button.addEventListener('click',function(){
      addNumber(button.innerText);
  })
})

buttonsNumberOpereitors.forEach(function(button){
  button.addEventListener('click',function(){
     selectOperation(button.innerText);
     result.value = button.value;
  })
})

buttonEqual.addEventListener('click',function(){
      calculate();
      UpdateDisplay();
      
  }
)

buttonDelete.addEventListener('click',function (){
  clear();
  UpdateDisplay();
})


function selectOperation(op){
  if(ActualOperation ==='' )return;
  if(PreviusOperation != '' ){
       calculate();
  }

  operation = op.toString();
  PreviusOperation = ActualOperation;
  ActualOperation = '';

}

function addNumber(num){
    ActualOperation = ActualOperation.toString()+num.toString();
    UpdateDisplay();
}

function UpdateDisplay(){
  result.value = ActualOperation;
}


function clear(){
  ActualOperation  = '';
  PreviusOperation = '';
  Operation = '';
}




function calculate(){
  let res;
  const previus = parseFloat(PreviusOperation);
  const actual =  parseFloat(ActualOperation);

  if(isNaN(previus)||isNaN(actual))return;
  switch(operation){
    case '+':
      res = previus + actual;
      break;
    case '-':
      res = previus - actual;
      break;
    case '*':
      res = previus * actual;
      break;
    case'/':
        res = previus / actual; 
      break;
      default :
          return;        
  } 
 
  ActualOperation = res;
  operation = undefined;
  PreviusOperation = '';
    
} 


