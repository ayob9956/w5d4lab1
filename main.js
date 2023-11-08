 let continer = document.getElementById("continer")

for (let index = 0; index <= 100; index++) {
   
    let dvis = document.createElement("div");

    dvis.className="divs"
  
    if (index%2 == 0) {
        dvis.style.backgroundColor="green"
    }else if (index % 2 !=0) {
        dvis.style.backgroundColor = "red"
    }

 
function isPrime(index) {
    

    if (index==1)
    {
     dvis.style.backgroundColor="yellow";
    }
    else if(index == 2)
    {
     dvis.style.backgroundColor="red";
    }
    else
    {
      for(var x = 2; x < index; x++)
      {
        if( index%2 ==1 && index % x == 0)
        {
         dvis.style.backgroundColor="yellow";
 
      }
 
     }
       
}}
    dvis.innerText=`${index} `
    
    continer.appendChild(dvis)
    isPrime(index);
}

isPrime(index);