var speech = "my name is solaiman shadin. I am a web developer";
var count = 0;

for(var i = 0; i < speech.length; i++){
    var element = speech[i];
    if(element == ' ' && speech[i-1] != ' '){
        count++
    }
}
var wordCount = count+1;
console.log(wordCount);
