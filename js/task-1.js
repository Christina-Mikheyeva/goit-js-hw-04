//----------------------- First option --------------------------------------

function isEnoughCapacity(products, containerSize) {
    let sumProducts = 0;
    for (const product in products) {
        sumProducts += products[product]
    }
    return sumProducts > containerSize ? "false" : "true";
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

//----------------------- Second option --------------------------------------

// function isEnoughCapacity(products, containerSize) {
//     const keys = Object.values(products);
//     let total = 0;
//     for (const number of keys) {
//         total += number
//     }
//  return total > containerSize ? "false" : "true";
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

//----------------------- Third option --------------------------------------

// function isEnoughCapacity(products, containerSize) {
//     const keys = Object.keys(products);
//     let total = 0;
//     for (const number of keys) {
//         total += products[number]
//     }
//  return total > containerSize ? "false" : "true";
// }


// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

