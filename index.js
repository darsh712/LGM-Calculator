

let string = "";
let buttons = document.getElementById("four");
let flag = true;

let buttonList = document.querySelectorAll("button");
  buttonList.forEach(function(i){
    i.addEventListener("click", function(e){
    console.log(e.target.innerHTML);
    let temp = e.target.innerHTML;


    if (temp=='←') {
      string = string.slice(0,-1);
      console.log("Hello");
      
      
    }
    else if (temp=='=') {
      
      console.log(string);
      try {
        string = eval(string);
        
      } 
      catch (error) {
        string = "Error";
        
        
      }

      
    }

    
    else
    {
      string = string + temp;
    }
     
    
    if (temp == 'AC') {
      string= '';
    }   
    // console.log(string);

      document.querySelector('input').value = string;
     
    

    })
  })
