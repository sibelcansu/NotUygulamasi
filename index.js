import readline from "readline";
import fs from "node:fs/promises"
import { todo } from "node:test";
import { existsSync } from "node:fs";

 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
   });

let notlar=[];
const fileName="notlar.json";

// Terminal komutlarını al
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "ekle":
        addNote(args[1]);
        break;
    case "listele":
        listNotes();
        break;
    case "sil":
        deleteNote(parseInt(args[1]));
        break;
    default:
        console.log("Not a valid command! You can use: ekle, listele, sil <ID>");
}
 
async function addNote(){
    //Dosya var mı kontrol et
    if(!existsSync(fileName)){
    await fs.writeFile(fileName, JSON.stringify([]));    
    };

    try{
          //Dosya varsa oku ve parse edip notlar arrayine aktar
        notlar=JSON.parse(await fs.readFile(fileName, {encoding:"utf-8"}));

        console.log("\nWelcome to Notes Application");
        console.log("-------------------------------")
        console.log();

        rl.question("Add your notes: ",async (answer)=>{
            if(answer=="exit"){
                console.log("Existing...")
                rl.close();
                return;
            }
            const id=notlar.length ? notlar[notlar.length-1].id+1:1;

            notlar.push({id:id,note:answer});
            await fs.writeFile(fileName,JSON.stringify(notlar));
            console.log("\nA new note is added.");        
    });
    }
    catch(error){
        console.error("An error occurred while adding a note:", error);
    }   
}

async function listNotes(){
    try{
        notlar=JSON.parse(await fs.readFile(fileName, {encoding:"utf-8"}));
        console.log("\n--- YOUR NOTES ---");
        console.log();

        if(notlar.length==0){
            console.log("There does not exist any notes...");
        }
        else{
            notlar.forEach(note => {
                console.log(`${note.id} - ${note.note}`);
                
            });
        }
    }
    catch(error){
        console.error("There is an error: ", error);
    }
}

async function deleteNote(id){
    try{
        notlar=JSON.parse(await fs.readFile(fileName, {encoding:"utf-8"}));

        const newNotes=notlar.filter(note=>note.id!=id);

        if(notlar.length===newNotes.length){
            console.log(`There does not exist any note with id ${id}`);
        }
        else{
            fs.writeFile(fileName,JSON.stringify(newNotes, null, 2));
            console.log(`\nThe note with ID ${id} is deleted.`)
        }
    }
    catch(error)
    {
        console.error("There is an error: ", error);
    }
}


