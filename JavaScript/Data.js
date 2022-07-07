
 function pegarDataBR (){
    var data = new Date()
    var dia = data.getDay()
    var s = document.getElementsByClassName("Segunda")
    var t = document.getElementsByClassName("Terça")
    var q = document.getElementsByClassName("Quarta")
    
    
    var Md = document.getElementById("Domingo")
    var Ms = document.getElementById("SegundaM")
    var Mt = document.getElementById("TerçaM")
    var Mqa = document.getElementById("QuartaM")
    var Mqi = document.getElementById("Quinta")
    var Mse = document.getElementById("Sexta")
    var Msa = document.getElementById("Sábado")
    if(dia == 1 || dia == 4 || dia == 0){
        for (let index = 0; index < s.length; index++){
            s[index].style = "display:block;"
        }
        }
    if(dia == 2 || dia == 5 || dia == 0){
        for (let index = 0; index < t.length; index++){
            t[index].style = "display:block;"
        }
        }
        if(dia == 3 || dia == 6 || dia == 0){
        for (let index = 0; index < q.length; index++){
            q[index].style = "display:block;"
        }
         }   
       
    if(dia == 0){
        Md.style.display = 'block'
        
    }
    if(dia == 1){
        Ms.style.display = 'block'
        
    }
    if(dia == 2){
        Mt.style.display = 'block'
        
    }
    if(dia == 3){
        Mqa.style.display = 'block'
        
    }
    if(dia == 4){
        Mqi.style.display = 'block'
        
    }
    if(dia == 5){
        Mse.style.display = 'block'
        
    }
    if(dia == 6){
        Msa.style.display = 'block'
        
    }
 }
 console.log(pegarDataBR())