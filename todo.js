const fs = require('fs');
const { argv } = require('process');
const command = process.argv[2]
// console.log(process.argv.slice(3))
const aktivitas = process.argv.slice(3).join(" ")


// console.log(command)
// console.log(aktivitas)
const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
//data=[]

if (command === "add") {

  let obj = {
    pekerjaan: `[ ] ${aktivitas}`,
    tag: [ ]
  }

  data.push(obj)

  console.log(`"${aktivitas}" telah ditambahkan`)

  let dataJson = JSON.stringify(data)


  fs.writeFileSync("13.json", dataJson)

}

if (command === "delete") {

  let stringtonum = aktivitas - 1

  data.splice(stringtonum, 1)

  let dataJson = JSON.stringify(data)

  fs.writeFileSync("13.json", dataJson)
  console.log(`"${data[stringtonum].pekerjaan.slice(4)}" telah di hapus`)

  

}

if (command === "list") {
  console.log("Daftar Pekerjaan")
  for (let index = 0; index < data.length; index++) {
    // const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
    let num = index + 1
    // console.log(`${data.definition}`)
    console.log(`${num}. ${data[index].pekerjaan}`)  //yg di konsol nilai objek

    
  }


}
if (command === "complete") {

  let unfinish = data[aktivitas - 1].pekerjaan // [ ] saya masak sayur
  // console.log(unfinish)

  let finish = `[x] ${unfinish.slice(4)}`

  data[aktivitas - 1].pekerjaan = finish
  console.log(`"${aktivitas.slice(4)} ${data[aktivitas - 1].pekerjaan.slice(4)}" telah selesai`)
  let dataJson = JSON.stringify(data)

  fs.writeFileSync("13.json", dataJson)


}
if (command === "uncomplete") {
  let unover = data[aktivitas - 1].pekerjaan

  let over = `[ ] ${unover.slice(4)}`

  data[aktivitas - 1].pekerjaan = over
  console.log(`"${aktivitas.slice(2)} ${data[aktivitas - 1].pekerjaan.slice(4)}" status selesai di batalkan `)

  let dataJson = JSON.stringify(data)

  fs.writeFileSync("13.json", dataJson)

}
//node todo.js list:out standing asc

if (command === "list:outstanding") {

  const data = JSON.parse(fs.readFileSync("13.json", "utf8"))
  console.log("Daftar Pekerjaan")
  if (aktivitas === 'asc') {

    data.forEach((agenda, i) => {
      // console.log(agenda)
      if (agenda.pekerjaan.slice(0, 3) === "[ ]") {
        console.log(`${i + 1}, ${agenda.pekerjaan}`);
      }
    });

  } else {

    for (let i = data.length - 1; i >= 0; i--) {

      if (data[i].pekerjaan.slice(0, 3) === "[ ]") {
        console.log(`${i + 1}, ${data[i].pekerjaan}`);
      }

    }
  }

}

if (command === "list:complete") {

  const data = JSON.parse(fs.readFileSync("13.json", "utf8"))

  console.log("Daftar Pekerjaan")

  if (aktivitas === 'asc') {

    data.forEach((agenda, i) => {
      // console.log(agenda)
      if (agenda.pekerjaan.slice(0, 3) === "[x]") {
        console.log(`${i + 1}, ${agenda.pekerjaan}`);
      }
    });

  } else {

    for (let i = data.length - 1; i >= 0; i--) {

      if (data[i].pekerjaan.slice(0, 3) === "[x]") {
        console.log(`${i + 1}. ${data[i].pekerjaan}`);
      }

    }
  }

} 
if (command === 'tag') {
  const data = JSON.parse(fs.readFileSync("13.json", "utf8"))

  
  let pointer = aktivitas[0]

  let point = aktivitas.slice(2)
  

  let clear = data[pointer - 1].tag

clear.splice(2, 0, point)
  // console.log(pointer)
  // console.log(point)
  // console.log(clear)  
  console.log(`"${aktivitas.slice(2)} "telah ditambahkan ke daftar "${data[pointer - 1].pekerjaan.slice(4)}"`)

  // console.log(clearall)

  let dataJson = JSON.stringify(data)


  fs.writeFileSync("13.json", dataJson)


}

if (command.slice(0, 6) === "filter"){
  const data = JSON.parse(fs.readFileSync("13.json", "utf8"))

  // console.log("Daftar pekerjaan")

  let search = command.slice(7)  //"masak"===[]
  
  data.forEach((obj, i)=>{

    obj.tag.forEach((tags)=>{
      if(tags === search){
        console.log('Daftar Pekerjaan');
        console.log(`${i + 1}. ${obj.pekerjaan}`);
      }
    })
  })
}

if (command === 'help'){
    console.log('>>> JS TODO <<<')
    console.log('$ node todo.js list')
    console.log('$ task <task_id>')
    console.log('$ add <task_content>')
    console.log('$ delete <task_id>')
    console.log('$ complete <task_id>')
    console.log('$ uncomplete <task_id>')
    console.log('$ list:outstanding asc|dsec')
    console.log('$ list:complete asc|desc')
    console.log('$ tag <task_id> <tag_name_1>')
    console.log('$ filter:<tag_name>')
}
