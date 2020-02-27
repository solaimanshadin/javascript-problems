var arr = ['shadin' , 'mazlan' , 'mamun', 'jahid' , 'zahid' , 'mamun' , 'jahid']
var uniqueName = [];
for(var i =0; i < arr.length; i++){
    var element = arr[i];
    var index = uniqueName.indexOf(element);

    if(index == -1){
        uniqueName.push(element)
    }
}
console.log(uniqueName)