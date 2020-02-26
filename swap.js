// Value Swaping 

//Swaping with a Extra variable
var a = 5;
var b = 7;
var temp = a;
a = b;
b = temp;
console.log("After Swap a= " , a , " b = " , b);

//Swaping Without Temp variable (All Programming)
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y ;
console.log("After Swap x= " , x , " y = " , y);

//Swaping values in Javascript
var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("After Swap p= " , p , " q = " , q);