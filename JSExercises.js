/*
//Exercise 1: Loops
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }

}
console.log("");

for (var i = 0; i <= 10; i++) {
    console.log(i + " * 9 = " + (i * 9));
}

console.log("");
// Exercise 1 Bonus

for (var i = 0; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

// Exercise 2
let colors = ['teal', 'sage', 'forest green', 'jade', 'teal', 'sage', 'forest green', 'jade', 'teal', 'sage', 'forest green', 'jade', 'teal', 'sage', 'forest green', 'teal', 'sage', 'forest green', 'jade', 'teal', 'sage', 'forest green', 'teal', 'sage', 'forest green', 'jade', 'teal', 'sage', 'forest green', 'jade',];

for (var i = 0; i < colors.length; i++) {
    console.log("My #" + i + " choice is " + colors[i]);
}

// Exercise 2 Bonus
for (var i = 0; i < colors.length; i++) {
    if (((i + 1) % 10 == 1) && ((i + 1) != 11)) {
        console.log("My " + (i + 1) + "st choice is " + colors[i]);
    }
    else if (((i + 1) % 10 == 2) && ((i + 1) != 12)) {
        console.log("My " + (i + 1) + "nd choice is " + colors[i]);
    }
    else if ((i + 1) % 10 == 3 && ((i + 1) != 13)) {
        console.log("My " + (i + 1) + "rd choice is " + colors[i]);
    }
    else {
        console.log("My " + (i + 1) + "th choice is " + colors[i]);
    }
}

//Exercise 3: Cooking Recipe
var matchaLatte = {
    name: 'matcha latte',
    color: 'green',
    servingSize: 1,
    ingredients: ["green tea leaves", "hot water", "honey", "matcha powder"],
};
function makeRecipe(recipe) {
    console.log("How to make " + recipe.name);
    console.log("Add " + recipe.ingredients);
    console.log("All Done Enjoy!");
}
function serveTea() {
    console.log("Mmm~ Delicious");
}

makeRecipe(matchaLatte);
serveTea();


//Exercise 4: Movie Database
var miniIMDB = {
    title: 'Le Petite Prince',
    duration: 108,
    stars: ['Jeff Bridges', 'Rachel McAdams', 'James Franco', 'Paul Rudd', 'Marion Cotillard']
}

function getMovie(film) {
    console.log(film.title + " lasts for " + film.duration + ". Stars: " + film.stars);
}

getMovie(miniIMDB);

*/


var x = 0;
while (x < 5) {
    console.log(x);
    x = x + 1;
}