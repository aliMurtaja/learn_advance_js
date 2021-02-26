// //-----------------3-------------------DIVE INTO DEEP: EXECUTION-CONTEXT AND CALL-STACK 


// var n= 2;
// function sqare (num) {
//     var ans = num*num;
//     return ans;
// }

// var sqare2 = sqare(n);
// var sqare4 = sqare(4);


//  //-----------------4-------------------HOISTING DEEP-UNDERSTANDIN

// // scenerio_1:
//     console.log(x); //it will be accessed bcs we already reserved the space in creation-phase
//     console.log(getName()) //it will be accessed bcs we already reserved the space in creation-phase

//     var x = 10;
//     function getName(){
//         console.log('variable and function-declaration are hoisted');
//     }


// // scenerio_2:
//     console.log(x); 
//     console.log(getName) 

//     function getName(){
//         console.log('variable and function-declaration are hoisted');
//     }


// // scenerio_3:
//         console.log(getName) // in globle-scop, you will get -->getName: undefined, it print undefined
//         console.log(getName()) // in globle-scop, you will get -->getName: undefined, it print --> Uncaught TypeError: getName is not a function, do you know y type err bcs we declare the getName using var keywork and we use as a function, so it give the type err, bcs type of getName is variable not function

//         var getName =() =>{
//         console.log('variable and function-declaration are hoisted');
//         }

// scenerio_4(this is only for call stack):
// console.log(x); //it will be accessed bcs we already reserved the space in creation-phase
// var x = 10;
// function getName(){
//     //put debugger here
//     console.log('variable and function-declaration are hoisted');
// }
// getName()


//  //-----------------5-------------------HOISTING DEEP-UNDERSTANDIN

// var x =1;
// a();
// b();
// console.log(x);

// function a(){
//     var a =10;
//     console.log(a);
// }

// function b(){
//     var b =100;
//     console.log(b);
// }
