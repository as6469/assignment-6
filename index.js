import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{message: "enter your url: ", name: "URL", },])
    .then((answers) => { qr.image(answers.URL).pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile("URL.txt", answers.URL, (err) =>{ if(err) throw err; console.log("file saved to qr_img.png");}); })
    .catch((error) => { if (error.isTtyError) { } else { } });
