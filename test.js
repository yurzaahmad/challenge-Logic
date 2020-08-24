// const fs = require('fs');
// // const { log } = require('console');

// // // let check=true

// // // let bilanganGenap=[]

// // // for (let i = 1; i < 100; i++) {
// // //     if(i%2!=0 ){
// // //         check =false
// // //     }
// // //     if(i%2===0){
// // //         check=true
// // //     }
// // //     if(check===true){
// // //         bilanganGenap.push(i)
// // //     }
// // // }
// // // console.log(bilanganGenap)

// // // function sumOfDigits(num) {
// // //     if (num == 0) {
// // //         return 0;
// // //     }
// // //     return num % 10 + sumOfDigits(Math.floor(num / 10));
// // // }
// // // console.log(sumOfDigits(324))

// // const readline = require('readline');
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout,
// //   prompt: 'OHAI> '
// // });

// // rl.prompt();

// // rl.on('line', (line) => {
// //   switch (line.trim()) {
// //     case 'hello':
// //       console.log('world!');
// //       break;
// //     default:
// //       console.log(`Say what? I might have heard '${line.trim()}'`);
// //       break;
// //   }
// //   rl.prompt();
// // }).on('close', () => {
// //   console.log('Have a great day!');
// //   process.exit(0);
// // });
// // let fakeProccesArg=["node","test.js","add","saya","berternak","cupang"]
// // console.log(process.argv)


// const command = process.argv[2]
// console.log(process.argv.slice(3))
// let aktivitas = process.argv.slice(3).join(" ")


// console.log(command)
// console.log(aktivitas)
// const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
// //data=[]

// if (command === "add") {

//   let obj = {
//     pekerjaan: `[ ] ${aktivitas}`,
//     tag: [ ]
//   }

//   data.push(obj)

//   let dataJson = JSON.stringify(data)


//   fs.writeFileSync("13.json", dataJson)
// console.log(`${aktivitas} telah ditambahkan`);

// }

// if (command === "delete") {

//   let stringtonum = Number(aktivitas) - 1

//   data.splice(stringtonum, 1)

//   let dataJson = JSON.stringify(data)

//   fs.writeFileSync("13.json", dataJson)


// }

// if (command === "list") {
//   for (let index = 0; index < data.length; index++) {
//     // const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
//     let num = index + 1
//     // console.log(`${data.definition}`)
//     console.log(`${num}. ${data[index].pekerjaan}`)  //yg di konsol nilai objek


//   }


// }
// if (command === "complete") {

//   let unfinish = data[aktivitas - 1].pekerjaan // [ ] saya masak sayur


//   let finish = `[x] ${unfinish.slice(4)}`

//   data[aktivitas - 1].pekerjaan = finish
//   console.log(data)
//   let dataJson = JSON.stringify(data)

//   fs.writeFileSync("13.json", dataJson)


// }
// if (command === "uncomplete") {
//   let unover = data[aktivitas - 1].pekerjaan

//   let over = `[ ] ${unover.slice(4)}`

//   data[aktivitas - 1].pekerjaan = over
//   console.log(data)
//   let dataJson = JSON.stringify(data)

//   fs.writeFileSync("13.json", dataJson)

// }
// //node todo.js list:out standing asc

// if (command === "list:outstanding") {

//   const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
//   if (aktivitas === 'asc') {

//     data.forEach((agenda, i) => {
//       // console.log(agenda)
//       if (agenda.pekerjaan.slice(0, 3) === "[ ]") {
//         console.log(`${i + 1}, ${agenda.pekerjaan}`);
//       }
//     });

//   } else {

//     for (let i = data.length - 1; i >= 0; i--) {

//       if (data[i].pekerjaan.slice(0, 3) === "[ ]") {
//         console.log(`${i + 1}, ${data[i].pekerjaan}`);
//       }

//     }
//   }

// }

// if (command === "list:complete") {

//   const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
//   if (aktivitas === 'asc') {

//     data.forEach((agenda, i) => {
//       // console.log(agenda)
//       if (agenda.pekerjaan.slice(0, 3) === "[x]") {
//         console.log(`${i + 1}, ${agenda.pekerjaan}`);
//       }
//     });

//   } else {

//     for (let i = data.length - 1; i >= 0; i--) {

//       if (data[i].pekerjaan.slice(0, 3) === "[x]") {
//         console.log(`${i + 1}. ${data[i].pekerjaan}`);
//       }

//     }
//   }

// } 
// if (command === 'tag') {
//   const data = JSON.parse(fs.readFileSync("13.json", "utf8"))

//   let pointer = aktivitas[0]

//   let point = aktivitas.slice(2)

//   let clear = data[pointer - 1].tag

// clear.splice(2, 0, point)
//   console.log(pointer)
//   console.log(point)
//   console.log(clear)  
//   // console.log(clearall)

//   let dataJson = JSON.stringify(data)


//   fs.writeFileSync("13.json", dataJson)


// }

// if (command.slice(0,6) === "filter"){
//   console.log("fitur filter bekerja")

//   let search = command.slice(7)  //"masak"===[]
//   // console.log(search)
//   for (let i = 0; i < data.length; i++) {

//     //data[i].tag.include(search)
//    for (let search in data.tag){
//      console.log(data.tag + search)
     
//    }
//     if (search === data.tag){
//       console.log('dapet')
//     }else{
//       console.log('gk ada')                   
//     }
    
//   }
//   // console.log(data.tag)
// }



const data=[{nama:"joni",umur:23},{nama:"ucok",umur:99},{nama:"warne",umur:9},{nama:"popy",umur:20}]

console.log(data[0].umur + " " + data[0].nama)
console.log(`si ${data[0].nama.slice(3)} masih muda umurnya ${data[0].umur}    hahaha`)