// EXO 1

for (let index = 0; index < 20; index++) {   
    console.log("Bonjour"); 
}

for (let i = 0; i < 21; i++) {
    switch (i%2 ==0) {
        case (true):
            console.log(`${i} est pair`)
            break
        case (false):
            console.log(`${i} est impair`)
            break
    }
}

// EXO 2

let coding16 = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "maxence", "zulma"]

for (let i = 0; i < coding16.length; i++) {
    console.log(`Bonjour ${coding16[i]}`);
}

// EXO 3

let nb = parseInt(prompt("Nombre ?"))

for (let i= 0; i < nb + 1; i++) {
    console.log(i);
}