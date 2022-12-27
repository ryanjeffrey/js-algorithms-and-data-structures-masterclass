// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
    let collection = {}
    for (let value in arguments) {
        collection[arguments[value]] = (collection[arguments[value]] || 0) + 1
    }
    for (let key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates());
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));