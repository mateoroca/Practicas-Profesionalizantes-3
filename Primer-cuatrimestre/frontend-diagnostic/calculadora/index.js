

const buttonsNumber = document.querySelectorAll(".number-blue");
const buttonsNumberOpereitors = document.querySelectorAll(".operation-green");
const buttonEqual = document.querySelector("#equal");
const buttonDelete = document.querySelector("#delete");
const result = document.querySelector("#result");

let display = '';

buttonsNumber.forEach(function(button){
  button.addEventListener('click',()=>{
   display = `${result.value}${button.value}` ;
    result.value = display;
  })
})

buttonsNumberOpereitors.forEach(function(button){
  button.addEventListener('click',()=>{
    display = `${result.value}${button.value}` ;
    result.value = display;
  })
})


  buttonDelete.addEventListener('click',()=>{
    result.value = '';

  })


buttonEqual.addEventListener('click',()=>{
    result.value = eval(display);

})



