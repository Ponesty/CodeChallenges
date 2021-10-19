let person = {
    firstName: "Chanandler",
    lastName: "Bong",
    age: 34
}

// console.log(person.firstName);

// console.log(person['firstName']);

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper',
}

const {dessert} = meal;

// console.log(dessert);

const {appetizer, entree} = meal;

console.log(appetizer, entree);
// console.log(entree);

const {drink: bestSodaEver} = meal;
// const bestSodaEver = meal.drink; ^Same^

// console.log(bestSodaEver);

// const myAppertizer = meal.appetizer;
// const myEntree = meal.entree;
// const myDessert = meal.dessert;
// const myDrink = meal.drink;
//Top 4 lines same as bottom line
const{appetizer: myAppertizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal;

// console.log(bestSodaEver);
// console.log(myDrink);

// for(let key in person){
//     console.log(key);
// }

// for(key in person){
//     console.log(person[key]);
// }

person.job ="Statistical Anaylysis and Data Reconfiguration";

person['pets'] = ['Chicken', 'Duck'];

// for(key in person){
//     console.log(key);
// }

let teams = {
    teamOne: ['ryan', 'alex'],
    teamTwo: ['henry', 'cole', 'charlie'],
    teamThree: ['porter', 'blake'],
    teamFour: ['monique', 'mariko'],
    teamFive: ['shania', 'deepta']
}

delete teams.teamTwo;

// for(let team in teams){
//     console.log(team);
// }

class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am an ${this.age} year old ${this.breed}.`);
    }
}

let lassie = new Dog('Lassie', 'Collie', 18);

//console.log(lassie.name);

let beethoven = new Dog('Beethoven', 'St. Bernard', 12);

//console.log(beethoven.breed);

lassie.greeting();

beethoven.greeting();

for(key in lassie){
    console.log(lassie[key]);
}