 const fs = require("fs");

// //synce...
// fs.writeFileSync('./text.txt', 'Hey world');

// //asynce..

// fs.writeFile('./text.txt', 'Hey emtiaz', (err) => {});



// //read file

//  const result =fs.readFile('./contact.txt','utf-8');
//  console.log(result);



// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("error:", err);
//     } else {
//         console.log(result);
//     }
// });


fs.appendFileSync('./contact.txt', new Date().getDate().toLocaleString());