// localStorage.clear();

let dt= new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" });

let date= document.getElementById("dynamicDate");
date.innerText= dt;

let dataInput= document.getElementById("todo-input");
let addBtn= document.getElementById("addButton");
let clrBtn= document.getElementById("clrBtn");

let list= [];

function saveToLocalStorage()
{
    localStorage.setItem("todoList", JSON.stringify(list));
}

function loadFromLocalStorage()
{
    let storedList= localStorage.getItem("todoList");
    if(storedList)
    {
        list= JSON.parse(storedList);
    }
}

// function strikeCheckbox(i)
// {
//     let it= document.getElementById("box-" + i);
    
//     it.addEventListener('change', function() {
//         if (it.checked)
//         {
//             let currBox= document.getElementById("item-"+i);
//             currBox.innerText= `<p class="item" id="item-${i}> <input type="checkbox" class="checkbox" id="box-${i}>&emsp;${currBox.innerText}</p>`;
//         }
//         else 
//         {

//         }});
// }

// let checked= [];

addBtn.addEventListener("click", function(){

    if(dataInput.value == "") return;

    let n= list.length - 1;

   document.getElementById("todo-list").innerHTML+= ` <p class="item" id="item-${n+1}"> <input type="checkbox" class="checkbox" id="box-${n+1}">&emsp; ${dataInput.value}</p>`;
   document.getElementById("todo-input").focus();

//    console.log("hey +",document.getElementById("item-"+(n+1)).innerText);

   list.push(dataInput.value);
   saveToLocalStorage();
   console.log(list);

//    strikeCheckbox(n+1);

   document.getElementById("todo-input").value="";
});

clrBtn.addEventListener("click", (e)=>{
    document.getElementById("todo-list").innerHTML= "";
    list= [];
    saveToLocalStorage();
    console.log(list);
});

function populateItemsFromLocalStorage()
{
    loadFromLocalStorage();
    
    if(list.length == 0)
    {
        return;
    }

    for(let i=0;i<list.length;i++)
    {
        document.getElementById("todo-list").innerHTML+= ` <p class="item" id="item-${i}"> <input type="checkbox" class="checkbox" id="box-${i}">&emsp; ${list[i]}</p>`;
    }
}

window.addEventListener("load", populateItemsFromLocalStorage);