//Question 1: Function Basics

function calculateArea(length,width){
    let area = length*width
    return area;
   }
   console.log(calculateArea(7,4));//28
   
   //Question 2: Scope Exploration
   
   let globalVar = "Global view";
    function localScopeFun(){
       let localVar ="Local view"
       console.log(globalVar);//Global view
       console.log(localVar);//Local view
       return
    }
    localScopeFun()// local view
   
    //Question 3: Closures and Private Counters
    
    let counter = (()=>{
       let counter =0
       return()=>{
       counter +=1
       return counter
       }
    })()
    
    console.log(counter()); //1
    console.log(counter()); //2
    console.log(counter()); //3
   
   
   