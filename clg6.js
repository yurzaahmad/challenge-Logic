function sentenceManipulation(sentence){
    let str=sentence.split(" ")
    
    let penampung=[]
    for (let i = 0; i < str.length ; i++) {
    //    console.log(`loop ke ${i} "${str[i]}" ini punya str[i]`)
    //             console.log(`loop ke ${i} "${str[i][0]}" ini punya str[i][0]`)
         if (str[i][0]==='a' || str[i][0]==='i' || str[i][0]==='u' || str[i][0]==='e' || str[i][0]==='o') {
             penampung.push(str[i])
             
         } else {
            penampung.push(`${str[i].slice(1)}${str[i][0]}nyo`)
      
         }
            
        
        
    }

   return penampung.join(' ')

}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'))//[]
console.log(sentenceManipulation('bebek kuda ayam kucing'))//[]