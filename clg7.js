function weirdMultiply(sentence) {
    var angka = sentence.toString() 
    // angka="4",==>angka[0]="4"
    var hasil = 1

    if (angka.length == 1){
        return sentence //4
    }
    for (let i = 0; i < angka.length; i++) {
        hasil = hasil * angka[i] //loop pertam angka[i]="1", hasil saat di loop="4"
    }
    //hasil1 =4
    
     return weirdMultiply(hasil)//4
}
console.log(weirdMultiply(39))//console.log(4)
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))