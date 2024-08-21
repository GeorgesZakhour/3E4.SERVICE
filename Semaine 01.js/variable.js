const name = "samuel";//definir un variable qui ne peut pas etre reaffecter , je ne peux pas refaire un = 

let age = 16;//definir un variable qui peut etre reaffecter , je peux refaire un = (1%)


age +=1;
age++;
age = age + 1;
console.log(age);


const summ = addition(age, 5);


console.log(summ);
function addition(a, b) {
    return a + b;
}

function afficherUtilisateur(nom, age) {
    console.log(`bonjour je mappelle ${nom}, Age: ${age}`); //template pour afficher des variables en chaine il faut mettre le signe de dollar et les accolades	et ``
}
afficherUtilisateur(name, age);