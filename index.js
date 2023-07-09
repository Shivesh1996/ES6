// let poo = "Soni"
// console.log(poo)
// var pooja = "jii"
// console.log(pooja)
// const aviral = "chuuuuu"
// console.log(aviral)

// var name = "Shivesh";
// name = "Pandey";
// console.log(name);

// let name = "Shivesh";
// name = "Pandey";
// console.log(name);

// const name = "Shivesh";
// name = "Pandey";
// console.log(name);

////block scope
// function modeJS(love){
//     if (love){
//         let name  = "Shivesh"
//         const sname = "Pandey"
//         console.log("My name is "+name+" "+sname)
//     }
// }
// modeJS(true)
 
// function modeJS(love){
//     if (love){
//         let name  = "Shivesh"
//         const sname = "Pandey"
//     }
//     console.log("My name is "+name+" "+sname) //error: sname is not defined
// }
// modeJS(true)
 

// //function scope
// function modeJS(love){
//     if (love){
//         var name  = "Shivesh"
//         var sname = "Pandey"
//     }
//     console.log("My name is "+name+" "+sname)
// }
// modeJS(true)

// var whoWillWinToday = "India";
// if (true){
//     var whoWillWinToday = "NewZeland";
//     console.log(whoWillWinToday)
// }
// console.log(whoWillWinToday)

// // o/p: NewZeland
// //      NewZeland

// let whoWillWinToday = "India";
// if (true){
//     let whoWillWinToday = "NewZeland";
//     console.log(whoWillWinToday)
// }
// console.log(whoWillWinToday)

// // o/p: NewZeland
// //      India

const whoWillWinToday = "India";
if (true){
    const whoWillWinToday = "NewZeland";
    console.log(whoWillWinToday)
}
console.log(whoWillWinToday)

// o/p: NewZeland
//      India