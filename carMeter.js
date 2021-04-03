let gasPedal = document.querySelector(".gas-pedal");
let brakePedal = document.querySelector(".brake-pedal");
const shiftGear = document.querySelector(".clutch-pedal");
const leftArrow = document.querySelectorAll("div.leftArrow");
const leftCircle = document.querySelector(".left");
const rightCircle = document.querySelector(".right");

let divs = [];
let rotateIncrement = 45;

// Indicators for left circle

for(let i=1; i<=40; i++){
    
    //create 40 circle divs and append to left
 
     divs[i] = document.createElement("div");
     divs[i].className = "circle";
     leftCircle.append(divs[i]);
    
     // create indicators and long indicators
     const indicator = document.createElement("div");
     indicator.className = "indicator";
     const indicatorLong = document.createElement("div");
     indicatorLong.className = "indicator-long";
     
     // append indicators to their rightful locations
 
     if(i % 4 !== 0){
         divs[i].append(indicator);
     } else {
         divs[i].append(indicatorLong);
     }
     divs[i].style.transform = `rotate(${i*9}deg)`;
 }

    
 

 // Indicators for right circle

for(let i=1; i<=40; i++){
    
    //create 40 circle divs and append to right
 
     divs[i] = document.createElement("div");
     divs[i].className = "circle";
     rightCircle.append(divs[i]);
    
     // create indicators and long indicators
     const indicator = document.createElement("div");
     indicator.className = "indicator";
     const indicatorLong = document.createElement("div");
     indicatorLong.className = "indicator-long";
     
     // append indicators to their rightful locations
 
     if(i % 4 !== 0){
         divs[i].append(indicator);
     } else {
         divs[i].append(indicatorLong);
     }
     divs[i].style.transform = `rotate(${i*9}deg)`;
 }

// Creating array of long indicators

 const allLongIndicators = document.querySelectorAll(".circle .indicator-long");
 console.log(allLongIndicators);

// Creating paragraph elements inside long indicators

 for (let i = 0; i<allLongIndicators.length ; i++){
    const innerParagraphs = document.createElement("p");
    allLongIndicators[i].appendChild(innerParagraphs);
 }

 // Selecting all paragraphs inside long indicators

 const paragraphs = document.querySelectorAll(".indicator-long p");

 paragraphs[0].textContent = "10";
 paragraphs[0].style.marginLeft = "150%";
 paragraphs[0].style.position = "relative";
 paragraphs[0].style.bottom = "200%";
 paragraphs[0].style.transform = "rotate(-36deg)";

 paragraphs[1].textContent = "20";
 paragraphs[1].style.marginLeft = "180%";
 paragraphs[1].style.position = "relative";
 paragraphs[1].style.bottom = "80%";
 paragraphs[1].style.transform = "rotate(-72deg)";
 
 paragraphs[2].textContent = "30";
 paragraphs[2].style.marginLeft = "180%";
 paragraphs[2].style.position = "relative";
 paragraphs[2].style.bottom = "80";
 paragraphs[2].style.transform = "rotate(-108deg)";

 paragraphs[3].textContent = "40";
 paragraphs[3].style.marginLeft = "180%";
 paragraphs[3].style.position = "relative";
 paragraphs[3].style.bottom = "80%";
 paragraphs[3].style.transform = "rotate(-144deg)";

 paragraphs[4].textContent = "50";
 paragraphs[4].style.marginLeft = "200%";
 paragraphs[4].style.position = "relative";
 paragraphs[4].style.bottom = "200%";
 paragraphs[4].style.transform = "rotate(-180deg)";

 paragraphs[5].textContent = "60";
 paragraphs[5].style.marginLeft = "200%";
 paragraphs[5].style.position = "relative";
 paragraphs[5].style.bottom = "200%";
 paragraphs[5].style.transform = "rotate(-216deg)";

 paragraphs[6].textContent = "70";
 paragraphs[6].style.marginLeft = "200%";
 paragraphs[6].style.position = "relative";
 paragraphs[6].style.bottom = "200%";
 paragraphs[6].style.transform = "rotate(-252deg)";

 paragraphs[7].textContent = "80";
 paragraphs[7].style.marginLeft = "200%";
 paragraphs[7].style.position = "relative";
 paragraphs[7].style.bottom = "200%";
 paragraphs[7].style.transform = "rotate(-288deg)";

 paragraphs[8].textContent = "90";
 paragraphs[8].style.marginLeft = "200%";
 paragraphs[8].style.position = "relative";
 paragraphs[8].style.bottom = "200%";
 paragraphs[8].style.transform = "rotate(-324deg)";

 paragraphs[9].textContent = "0";
 paragraphs[9].style.marginLeft = "200%";
 paragraphs[9].style.position = "relative";
 paragraphs[9].style.bottom = "200%";
 paragraphs[9].style.transform = "rotate(-360deg)";
 paragraphs[9].style.zIndex = "-1";




gasPedal.addEventListener("click", function(){
        leftArrow[0].style.transform = "rotate(225deg)";
        leftArrow[1].style.transition = "2s";
        leftArrow[1].style.transform = "rotate(45deg)";
    }     
)

brakePedal.addEventListener("click", function(){
    leftArrow[0].style.transform = "rotate(0deg)";
    leftArrow[1].style.transform = "rotate(0deg)" 
})


shiftGear.addEventListener("click", function (){
    rotateIncrement += 45;
    leftArrow[0].style.transition = "1s";
    leftArrow[0].style.transform = "rotate(150deg)";
    setTimeout(function returnRev (){
        leftArrow[0].style.transform = "rotate(225deg)";
        leftArrow[0].style.transition = "2s";
    }, 1000);
    leftArrow[1].style.transform = `rotate(${rotateIncrement}deg)`;
})