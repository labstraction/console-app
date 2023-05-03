
const fs = require('fs');

let data;

try {

    data = fs.readFileSync('./data/test.csv', 'utf8');
    console.log('csv letto:', data);
    const json = parseCsvToJSON(data);
    writeJsonToFile(json);

} catch (err) {

    console.error(err);

}

function parseCsvToJSON(data) {

    //1) data = "name,surname,yob,gender\njing,wang,1993,female\nsimone,maccarone,2003,male\npietro,viglino,1988,male\nvalentina,cherubini,2001,female"
    //2) trasformare la stringa in un array di righe: (.split(/\r?\n/);)
    //   righe = ["name,surname,yob,gender", "jing,wang,1993,female", "simone,maccarone,2003,male", "pietro,viglino,1988,male", "valentina,cherubini,2001,female"];
    //3) separare la prima riga dalle successive:
    //   intestazione = "name,surname,yob,gender"
    //   righe = ["jing,wang,1993,female", "simone,maccarone,2003,male", "pietro,viglino,1988,male", "valentina,cherubini,2001,female"];
    //4) trasformare intestazione in un array:
    //   intestazione = ["name","surname","yob","gender"]
    //   righe = ["jing,wang,1993,female", "simone,maccarone,2003,male", "pietro,viglino,1988,male", "valentina,cherubini,2001,female"];
    //5) creare un array temporaneo
    //6) cicliamo le righe
    //7) trasformiamo la riga in un array
    // for (let i = 0; i < righe.length; i++) {
    //     const riga = righe[i];
    //     //6
    //     rigaArray = ["jing","wang","1993","female"]
    // }
    // 8) creare un nuovo oggetto vuoto
    // 9) ciclare su intestazione e aggiungere una proprietà all'oggetto per ogni elemento di intestazione
    // 10) aggiungere l'oggetto all'array temporaneo
    // 11) fare strigify dell'array temporaneo
    // 12) ritornare la stringa json
}

function writeJsonToFile(json) {

    try {
        fs.writeFileSync('./output/test.json', json);
        // file written successfully
    } catch (err) {
        console.error(err);
    }

}
