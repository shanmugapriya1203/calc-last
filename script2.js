let dis = document.getElementById('history-value');
let result = document.getElementById('result');
let but = Array.from(document.getElementsByClassName('button'));


but.map( button =>{
    
    button.addEventListener('click', (e) => {
        
        
        switch (e.target.innerText) {
            case "C":
                dis.innerText = "";
               result.value = "0";
                break;
            case "←":
                if(dis.innerText){
                    dis.innerText = dis.innerText.slice(0,-1);
                } 
                break;            
            
            case "=":                
                try{               
                     
                     result.value = eval(dis.innerText);                    
                } catch{
                    alert("Only numbers");
                }
                break;     
        
            default:                
                dis.innerText += e.target.innerText;               
        }       
    });
});