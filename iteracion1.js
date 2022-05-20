//1.1

let handleClick = function(event) {
    console.log(event);
}
document.getElementById('btnToClick').addEventListener('click', handleClick)

//1.2

let focusClick = function(event){
    console.log(event);
}
let focus$$ = document.querySelector('.focus').addEventListener('focus', focusClick)

//1.3

let inputClick = function(event){
    console.log(event);
}
let input$$ = document.querySelector('.value').addEventListener('input', inputClick)