// function deretKaskus(n){
//   var penampung=[]
//   for  (var i = 3 ;i <=n*3 ; i+=3) {
//     if (i%5===0 && i%6===0) {
//        penampung.push("KASKUS")
//     }else if(i%5===0){
//      penampung.push("KAS")
//     }else if (i%6===0) {
//        penampung.push("KUS")
    
//     } else {penampung.push(i)
       
//     }
       
    
//       }
       
//     return penampung
//   }
  
//  console.log (deretKaskus(10))

function deretKaskus(n){
  var penampung = []
  for (var i = 3 ; i <n*3 ; i+=3) {
    if (i % 5 === 0 && i % 6 === 0){
      penampung.push("KASKUS")
    } else if (i % 6 ===0){
      penampung.push("KAS")
    } else if (i % 5 === 0){
      penampung.push("KUS")
    } else {penampung.push(i)}
    
  }
  return penampung
}
console.log(deretKaskus(10))