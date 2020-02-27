function arraySum(arr){
    var sum = 0;
    for(var i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;    
}
var arr = [20,30,40,50,60,70];
var result = arraySum(arr)
var result2 = arraySum([20,38,40,50,60,70])
console.log(result , result2)