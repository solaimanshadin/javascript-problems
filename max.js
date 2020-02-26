// Finding Bigger Number 

var a = 20 ;
var b = 30;
var c = 10;


//way 1

if(a>b){
    if(a>c){
        console.log(a)
    }else{
        console.log(c)
    }
}else{
    console.log(b)
}

//way 2 

if(a>b && a>c){
    console.log(a)
}else if(b>a && b>c){
    console.log(b)
}else{
    console.log(c)
}

//JS way 
var max = Math.max(a,b,c)
console.log(max)