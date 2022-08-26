let todoArray = []

let todoObj={
    title:'',
    description:'',
    id:''
}
// console.log(todoObj.title,todoObj['description'])

let titleElement=document.getElementsByClassName('tpp1')[0];
let descElement = document.getElementById('tpp');
let btnElement = document.getElementsByClassName('button-submit')[0];
let clearElement = document.getElementsByClassName('button-clear')[0];


titleElement.addEventListener("change", function(){
    // console.log(titleElement.value)
    todoObj.title=titleElement.value
});

descElement.addEventListener("change", function(){
    // console.log(descElement.value)
    todoObj.description=descElement.value
});

btnElement.addEventListener("click",function(){
    todoObj.id = todoObj.title+todoObj.description
    todoArray.push(todoObj)
    todoObj={
        title:'',
        description:'',
        id:''
    }
    let tableElement = document.getElementById('tb')
   
    const ee = document.querySelectorAll('tr');
    console.log(ee)
 let v = ee.forEach((val,index) => {
       if(index!=0){
       val.remove();
       }
    });

    for(let i=0;i<todoArray.length;++i){
        if(!tableElement.classList.contains(todoArray[i].title+todoArray[i].description)){
            let tr = tableElement.appendChild(document.createElement('tr')); 
            tr.className = todoArray[i].id
            let td1 = tr.appendChild(document.createElement('td'));
            td1.innerHTML = i + 1;
            let td2 = tr.appendChild(document.createElement('td'));
            td2.innerHTML = todoArray[i].title;
            let td3 = tr.appendChild(document.createElement('td'));
            td3.innerHTML = todoArray[i].description;
            let td4 = tr.appendChild(document.createElement('td'));
            td4.innerHTML = 'Delete';
        }
      
    }  

})
// let clear=document.getElementsByClassName('button-clear')[0];
// function clear(){
//      return clearElement(tr);
// }






