function concatArrays(array) {
    return array.map(function(subArray) {
        return subArray.join();
    });
}

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"], 
  ["this", "is", "a", "long", "sentence"]
];
console.log(concatArrays(data));