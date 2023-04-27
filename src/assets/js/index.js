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
   
}

function init(){
    toogleButton.addEventListener("click", toogle);
  
 }

 init();