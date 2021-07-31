// alert("Hello, world");

// // Its a comment
// var d="df";

function setUpEvents(){
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


    // More IMP
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

    var myDate= new Date();
    console.log(myDate);

    //(String, number, no., no(0to23)) --> year, month, day
    // HH, MM, SS
    var myPastDate=new Date(1545, 11, 2, 30, 10, 15);
    console.log(myPastDate);
    console.log(myPastDate.getMonth(), myPastDate.getFullYear());

    // ----------------------------------------------------------------------------
    // MOST IMP

    var links =document.getElementsByTagName("a");
    links[0].innerHTML="Sanjay";

    var data =document.getElementById("datanew");
    data.textContent="New content";

    var n=document.getElementById("test");
    n.getAttribute("class"); // show name of class
    n.setAttribute("class", "pie"); // Modify class attribute
    n.setAttribute("alt", "new"); // add attribute

    // Changing CSS
    n.setAttribute("style", "position: relative;"); // Adding style
    n.setAttribute("style", "position: relative; left: 100px;");
    // Better
    n.style.left="20px";
    n.style.top="20px";
    n.style.color="red";
    n.style.backgroundColor='blue'; // Dont use bgd-color in JS use camel case

    // Adding elements in DOM
    var newLi=document.createElement("li"); // creating element
    var newA=document.createElement('a');
    // access element // [0] is given since its a array
    var menu=document.getElementById("main-nav").getElementsByTagName("li")[0];
    // Adding (appen... = method name)
    menu.appendChild(newLi);
    newLi.appendChild(newA);
    newA.innerHTML="Blog";
    // Adding elements at the top
    menu.insertBefore(newA, menu.getElementsByTagName("li")[0]);

    // Remove elements
    var parent = document.getElementById("main-nav").getElementsByTagName("li")[0];
    var child=parent.getElementsByTagName("li")[0];
    parent.removeChild(child); // for deleting
    // OR // Storing & removing --> To append it too
    // var removed=parent.removeChild(child);


    // Javascript Events
    var title=document.getElementById("event");
    title.onclick=function(){
                    alert("You clicked link 1")
                };
    title.onmouseover=function(){
                    alert("Yoy hovered ur mice");
                };
};

window.onload=function(){
                setUpEvents();
            };