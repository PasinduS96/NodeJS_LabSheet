
var time = 0;

var timer = setInterval(function(){

    time += 2;
    console.log(time+" time passed");
    
    if(time >= 20){

        clearInterval(timer);
    }
},2000);


/*
setTimeout(function(){

    console.log("Timed ");
    
},3000);
*/