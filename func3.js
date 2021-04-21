var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {"make":"Ford","model":"Mustang","year":1964};
 
 return newObject;
}
console.log(fromListToObject(arr));