function romawi(n) {
var lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
var romanize = ''
 var i ;
for (i in lookup){
    // console.log(i)
    // console.log(lookup[i])
    while (n >= lookup[i]){
    romanize += i;
    n -= lookup[i];

}
}
// romanize="III"
return romanize;

}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("______|_____ ____|_______");
console.log("4     | IV       |  ", romawi(4));
console.log("9     | IX       |  ", romawi(9));
console.log("13    | XIII     |  ", romawi(13));
console.log("1453  | MCDLIII  |  ", romawi(1453));
console.log("1646  | MDCXLVI  |  ", romawi(1646));