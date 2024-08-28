const tableau = [1, 2, 3];	//tableau	
//const tableau1 =[­'sport',1234,true] ///tableau a ne pas faire 
const fruits = ['pomme', 'banane', 'orangee'];//tableau de string
console.log(fruits[0]);//pomme

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}
fruits.push('fraise');//ajouter un element a la fin du tableau


function additionner(a, b) {
    return a + b;
}

const addition = (a, b) => a + b;//fonction flechee

addition(1, 2);
additionner(1, 2);

fruits.forEach(fruit=> console.log(fruit));



resultat = fruits.filter(f => f.length>6 );

console.log(resultat);

const MULTIPLICATION = 3;

const nombre = [10,21,32,42];

let produit = nombre.map(n => n*MULTIPLICATION ).filter(n=>n>75).map(n=>n+9).forEach(n=>console.log(n));

console.log(produit);//undefined foreach ne retourne rrien