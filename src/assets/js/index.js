let show = false;
const showContent = () => show=!show;
const toogleButton = document.getElementById("toogleButton");

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

function init(){
    toogleButton.addEventListener("click", toogle);
  
 }

 init();