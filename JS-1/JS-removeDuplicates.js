function RemoveDuplicates(array) {
    const frecuencia = array.reduce(function(a, item) {
        a[item] = (a[item] || 0) + 1;
        return a;
    }, {});
    
    return array.filter(function(item) {
        return frecuencia[item] === 1;
    });
}

let array1 = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];
let array2 = [0, 1, 2, 3, 5, 3, 4, 5, 6, 7, 7, 8, 9, 0];

console.log(RemoveDuplicates(array1));
console.log(RemoveDuplicates(array2));