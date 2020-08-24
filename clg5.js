function stringManipulation(word) {
  if (
    word[0] === "a" ||
    word[0] === "i" ||
    word[0] === "u" ||
    word[0] === "e" ||
    word[0] === "o"
  ) {
    return word;
  } else {
    return `${word.slice(1)}${word[0]}nyo`;
  }
}
console.log(stringManipulation("ayam"));
console.log(stringManipulation("bebek"));

// let hewan ="kucing"

// let jumlahKaki = 4

// console.log(`berapa jumlah kaki ${hewan}?`)
// console.log(`jumlah kaki si ${hewan} ada ${jumlahKaki}`)
