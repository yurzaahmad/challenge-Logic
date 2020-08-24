function sum(){

    var totalSum = 0;
    for (var i = 0; i < arguments.length; i++) {

        totalSum+=arguments[i] 
    }
    return totalSum

}


console.log (sum(1,2,7))
console.log (sum(1,4))
console.log (sum(11))
console.log (sum(10,3,6,7,9))


// function sum(){

//     var totalSum = 0;

//     for (i =0 ; i < arguments.length; i++) {
//         totalSum += arguments[i]
        
//     }
//     return totalSum
// }

// console.log(sum(3,4,5))

// let contoh=process.argv[2]
// console.log(contoh)