const readline = require('readline');
const fs = require('fs');



const data = JSON.parse(fs.readFileSync("data.json", "utf8"))

let i = 0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ' tebakan: '
});
console.log(`${data[i].definition}`)
rl.prompt()

rl.on('line', (line) => {


    if (line.trim() == data[i].term) {
        if (i === data.length - 1) {
            rl.close()
        }
        console.log("selamat anda benar\n")
        i++

        console.log(`${data[i].definition}`)
        rl.prompt()
    } else {

        console.log("wkwkwk, Anda kurang beruntung!\n")
        rl.prompt()
    }
}
).on('close', () => {
        console.log('Hore anda menang!\n');
        process.exit(0);
    });
// let salah=0
// salah++
// i++
// console.log(`kesalahan kamu ${salah}`)
// rl.prompt()

