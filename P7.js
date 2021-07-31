// alert("Hello, world");

// // Its a comment
// var d="df";

var links =document.getElementsByTagName("a");

for(i=0; i<links.length; i++){
    links[i].className = "link-"+i;
}

function getaverage(a, b){
    var avg =(a+b)/2;
    console.log(avg);

    return avg
}

var i = getaverage(10, 5);

console.log(i);

console.log(Math.max(9, 988, 0));

console.log(7*"dfsfd");

var a="fdsa";
// is Not a number
if(isNaN(a))
    console.log("dgsafd");

var str ="hello world";
if(str.indexOf("h")==-1){
    console.log("Not found")
}
else{
    console.log("found " + str.indexOf("f"))
}

var str2=str.slice(2, 9);
console.log(str2);
var str2=str.slice(2);
console.log(str2);

var tags="meat, heam, fsdfd";
var tagArray=tags.split(",");
console.log(tagArray);

var myArray=[];
myArray[0]=25;
myArray[1]=true;
myArray[2]="dsnghdjl";
console.log(myArray);
console.log(myArray.length);

// Object

var car1=new Object();
car1.speed=0;
car1.driver="dgsa";
car1.drive=function(){console.log(car1.driver);};
car1.drive();
console.log(car1.speed);
// OR
var mycar={
    speed : 60, 
    driver:"sanjay", 
    drive : function(){ console.log("I am "+ this.driver); },
    test  : function(){ console.log(this); } 
};

mycar.drive();
mycar.test();

// Constructor fns
var Car =function(maxSpeed, driver) {
    this.maxSpeed=maxSpeed; // Same as mycar2.maxspeed=
    this.driver=driver;
    this.drive=function (speed, time) {
        console.log(speed*time);
    };
    this.logDriver=function() {
        console.log("Driver name is "+ this.driver);
    };
}

var myCar = new Car(70, "Sanjay");
var myCar2= new Car(40, "Shyam");
myCar.drive(30, 5);
myCar2.logDriver();

