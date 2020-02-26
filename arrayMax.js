var marks = [33,88,91,97,78,54,70]
var max = marks[0];
for(var i =0 ; i < marks.length; i++){
    var elemet = marks[i];
    if(elemet > max){
        max = elemet;
    }
}
console.log(max)