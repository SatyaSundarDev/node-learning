const fs = require('fs');

// Synchronous Call
fs.writeFileSync('./text.txt', "Hey There \n") // A text file was created in the current file

// Asynchronous Call
// fs.writeFile("./test.txt", "Hello World Async", (err) => {})

// const result = fs.readFileSync("./contacts.txt", "utf-8") //Synchronous
// console.log(result);


// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Errror", err);
//     }else{
//         console.log(result);
//     }
// })


// fs.appendFileSync('./text.txt', new Date().getDate().toLocaleString())
fs.appendFileSync("./text.txt", `${Date.now()} Hii Developers \n`)

// fs.copyFileSync('./text.txt', "./copy.txt")

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./text.txt").isFile());

// fs.mkdirSync('my-docs')
fs.mkdirSync("my-docs/a/b", {recursive: true})