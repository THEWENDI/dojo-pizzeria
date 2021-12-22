// function pizzaoven(crusttype,saucetype,cheeses,toppings){
//     var pizza = {};
//     pizza.crusttype = crusttype;
//     pizza.saucetype = saucetype;
//     pizza.cheese = cheeses;
//     pizza.toppings = toppings;
//     return pizza;
// }
// var pizza1 = pizzaoven("deep dish", "traditional", "mozzarella",["pepperoni","sausage"])
// console.log(pizza1)

// var pizza2 = pizzaoven("hand tossed", "marinara", ["mozzarella", "feta",], ["mushrooms", "olives", "onions"])
// console.log(pizza2)

// var pizza3 = pizzaoven("tossed", "spicy", "swiss", ["bacon", "sausage", "onions"])
// console.log(pizza3)

// var pizza4 = pizzaoven("uncooked", "smelly", "no chesse", "n/a")
// console.log(pizza4)

var crusttype = [
    "deep dish",
    "hand tossed",
    "tossed","uncooked"
];

var saucetype = [
    "traditional",
    "marinara",
    "spicy",
    "smelly"
];

var cheeses = [
    "mozzarella",
    "feta",
    "no chesse",
    "swiss"
];

var toppings = [
    "pepperoni",
    "mushrooms", 
    "olives", 
    "onions",
    "sausage"
];

function randomrange(min,max){
    return Math.floor(Math.random()*(max - min))+min;
}

function randompick(arr){
    var i = Math.floor(Math.random()*(arr.length));
    return arr[i];
}

function randompizza(){
    var pizza = {};
    pizza.crusttype = randompick(crusttype);
    pizza.saucetype = randompick(saucetype);
    pizza.cheeses = [];
    pizza.toppings = [];
    
    for(var i = 0 ; i < randomrange(1,4); i++){
        pizza.cheeses.push(randompick(cheeses));
    }
    for(var i = 0 ; i < randomrange(0,5); i++){
        pizza.toppings.push(randompick(toppings));
    }
    return pizza;
}

console.log(randompizza())