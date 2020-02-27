function reverseString(str){
    var reverse = 0;
    for(var i=0; i< str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Alian bhaibrother";
var forAlian = reverseString(statement);
console.log(forAlian);
