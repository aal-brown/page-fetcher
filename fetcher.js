/* 

Take URL as a command line argument
as well as local file path and download the resource to the specified path

stdin to get the input*/

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

let arguments = process.argv
let urlInput = arguments.slice(2,3).toString();
let directory = arguments.slice(3).toString();

const request = require('request');
const fs = require('fs');

//You can use request as a function, then the "get" isn't required as it is explicit. For some reason get didn't even work.
//let dataFile = request.get(input);

request(urlInput, (error, response, body) => {
  
  if (!error) {
    
    console.log(`Saving file to ${directory}.`)
    
    fs.writeFile(directory, body, () => {

      if (error) throw error;
      
      console.log(`Downloaded and saved ${fs.statSync(directory).size} kbytes to ${directory}.`);
    });

  } else {
      
    console.log("Fetching cancelled due to eror:" + error.code);
    
  }
  
});




      