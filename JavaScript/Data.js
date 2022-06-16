
 function pegarDataBR (){
    var data = new Date()
    var dia = data.getDay()
    var s = document.getElementById("Segunda")
    var s2 = document.getElementById("Segunda2")
    var t = document.getElementById("Terça")
    var t2 = document.getElementById("Terça2")
    var q = document.getElementById("Quarta")
    var q2 = document.getElementById("Quarta2")
    
    var Md = document.getElementById("Domingo")
    var Ms = document.getElementById("SegundaM")
    var Mt = document.getElementById("TerçaM")
    var Mqa = document.getElementById("QuartaM")
    var Mqi = document.getElementById("Quinta")
    var Mse = document.getElementById("Sexta")
    var Msa = document.getElementById("Sábado")
    if(dia == 1 || dia == 4 || dia == 0){
             s.style.display = 'flex'
             s2.style.display = 'flex'
        }
    if(dia == 2 || dia == 5 || dia == 0){
            t.style.display = 'flex'
            t2.style.display = 'flex'
        }
    if(dia == 3 || dia == 6 || dia == 0){
            q.style.display = 'flex'
            q2.style.display = 'flex'
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