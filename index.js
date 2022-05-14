//framework - colors + fonts (6 types) - test in 6 inputs
//save and output the last 3 requests

//MORNING
// let input = document.getElementsByClassName("input")
// let array = [] //array






// input.addEventListener("click", () => {   //it is already has CALL HANDLER
//     framework.Font
// })


// function output(){

// }


//think abt principle - 7 buttoms as flowers click on them and insert in input
// With different fonts and colors (by default  black) save 3 results


// let input = document.getElementById("input")
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// let btn4 = document.getElementById("btn4")
// let btn5 = document.getElementById("btn5")
// let btn6 = document.getElementById("btn6")



// Object.prototype.button1 = () => {
//     input.style.fontFamily = "Press Start 2P"
// }

// input.button1()

//contructor

// function Name(value1,value2){
//     this.name = value1,
//     this.age = value2
// }
// const constructorNew = new Name("Elizaveta", 18)
// const anotherOne = new Name("Fedor", 25)
// console.log(constructorNew, anotherOne)


// function fonts(value){ //function - new kewyword contructor
   
//         console.log(value)
    
// }

// const Helvetica = new fonts(2003)
// Helvetica

//2 ways - methods + get/set
// const fonts = new Object({  //6 methods
//     button1(){  //method
//          // we dont have other tags!!! //methos on THIS OBJECT
//     }
//     // button2(){

//     // },
//     // button3(){

//     // },
//     // button4(){

//     // },
//     // button5(){

//     // },
//     // button6(){

//     // }
// })

// fonts.button1()

// let select  = document.getElementById("select")
let input = document.getElementById("input")
let option1 = document.getElementById("first")
let option2 = document.getElementById("second")
let option3 = document.getElementById("third")
let option4 = document.getElementById("forth")

function newfont (){
    if(option1.selected){ //selectes - property of this object
        input.style.background = "silver"
        input.style.fontFamily = "sans-serif"
    }
    else if(option2.selected){
        input.style.background = "rgb(245, 238, 213)"
        input.style.fontFamily = "monospace"
    }
    else if(option3.selected){ //select NOT value, not option!
        input.style.fontFamily = "fantasy"
        input.style.background = "rgb(240, 220, 149)"
    }
    else if(option4.selected){    //<select> - selected
        input.style.fontFamily = "serif"
        input.style.background = "rgb(232, 229, 218)"
    }
    else {
        input.style.background = "#CFC5B6"
        input.value = ""
    }
}

//value - a piece of stored info that can be manipulated by computer
//value in html - default value - to work with it in JS

//value IS AN OBJECT

//? cant change style of the value
//BC IT DOESNT EXIST IN HTML AS STH THAT WE CAN SEE

//style + value =  attributes in HTML