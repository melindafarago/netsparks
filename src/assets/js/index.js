let show = false;
const showContent = () => show=!show;
const toogleButton = document.getElementById("toogleButton");
const itemContainer = document.getElementById("item-container");

let dataList=[];

/*function fetchData(){
    fetch("/data/data.json")
    .then(data => data.json())
    .then(data =>{
        
        dataList=data;
        console.log(dataList);
        renderData();
    })
}*/

async function fetchData(){
    let result = await fetch("/data/data.json");
    dataList = await result.json();
    console.log(dataList);
   
}


function toogle(){
    if (showContent()){
        renderData();
        anime({
           targets: ['#item-container'],
           opacity: '1',
          
           duration: 1400,
           loop: false
         });
       toogleButton.innerHTML="Hide";
   } else {
       
       anime({
           targets: ['#item-container'],
           opacity: '0',
          
           duration: 1400,
           loop: false
         });
       toogleButton.innerHTML="Show";

   }
}
function getMonthName(d){
    const date = new Date(d);  //use Internatializatin API to get month name
    const month = date.toLocaleString('en', { month: 'long' });
   return month;
}
function renderData(){
    const random = Math.floor(Math.random() * dataList.length);
    const currEvent= dataList[random];
   
    const backgroundColor = currEvent["color"];
    const monthNameFrom = getMonthName(currEvent["from"]);
    const monthNameTo = getMonthName(currEvent["to"]);
    const dayFrom = new Date(currEvent["from"]).getDate();
    const dayTo = new Date(currEvent["to"]).getDate();
    let talenList=``;
    const talentArray= currEvent["talent"];

    talentArray.map(talent =>{
        console.log(talent);
        talenList+=`<div style="background : ${backgroundColor}">${talent}</div>`
    })
    
    const content = ` <div id="name">${currEvent["name"]}</div>
                        <div id="date">${monthNameFrom} ${dayFrom} - ${monthNameTo} ${dayTo}</div>
                        <div id="talent">
                            ${talenList}
                        </div>`;
   itemContainer.innerHTML=content;  
   itemContainer.querySelector("#name").style.background=backgroundColor;
}

function init(){
    toogleButton.addEventListener("click", toogle);
    fetchData();
 }

 init();