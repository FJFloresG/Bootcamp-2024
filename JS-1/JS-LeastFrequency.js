function findLeastFrequent(array) {
    let frequencyMap = new Map();
    for (let item of array) {
        if (frequencyMap.has(item)) {
            frequencyMap.set(item, frequencyMap.get(item) + 1);
        } else {
            frequencyMap.set(item, 1);
        }
    }
    let leastFrequentItem = null;
    let minFrequency = Infinity;

    for (let [item, frequency] of frequencyMap) {
        if (frequency < minFrequency) {
            minFrequency = frequency;
            leastFrequentItem = item;
        }
    }
    return leastFrequentItem;
}
let arr2 = [1,3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];
let result = findLeastFrequent(arr2);
console.log(result);