const readline = require('readline');
const fs = require('fs');
if (process.argv[2]=="data.json"){
console.log("selamat datang di permainan tebak-tebakkan, kamu akan diberikan pertanyaan dari file ini 'data.json. Untuk bermain, jawablah sesuai dengan jawaban yang sesuai. Gunakan 'skip' untuk menangguhkan pertanyaannya, dan diakhir pertanyaan akan di tanyakan lagi.")


 const data = JSON.parse(fs.readFileSync("data.json", "utf8"))

let i = 0
let salah=0

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban : '
});
console.log(`${data[i].definition}`)
rl.prompt()

rl.on('line', (line) => {


    if (line.trim() == data[i].term) {
        salah=0
        if (i === data.length - 1) {
            rl.close()
        }
        console.log("selamat anda benar")
        i++

        console.log(`${data[i].definition}`)
        rl.prompt()
    } else if(line.trim()=="skip"){
        data.push(data[i])
        salah=0
        i++
        console.log(`${data[i].definition}`)
        rl.prompt()
    }else {
        salah++
        console.log(`Anda kurang beruntung! anda telah salah ${salah} kali, silahkan coba lagi!`)
        rl.prompt()
        
        // console.log(`kesalahan kamu ${salah}`)
    } 
}
).on('close', () => {
        console.log('Hore anda menang!');
        process.exit(0);
    });}
// let salah=0
// salah++
// i++
// console.log(`kesalahan kamu ${salah}`)
// rl.prompt()


// console.log(process.argv)
