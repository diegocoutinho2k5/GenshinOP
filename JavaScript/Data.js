
 function pegarDataBR (){
    var data = new Date()
    var dia = data.getDay()
    var s = document.getElementById("Segunda")
    var s2 = document.getElementById("Segunda2")
    var s3 = document.getElementById("Segunda3")
    var s4 = document.getElementById("Segunda4")
    var s5 = document.getElementById("Segunda5")
    var s6 = document.getElementById("Segunda6")
    var t = document.getElementById("Terça")
    var t2 = document.getElementById("Terça2")
    var t3 = document.getElementById("Terça3")
    var t4 = document.getElementById("Terça4")
    var t5 = document.getElementById("Terça5")
    var t6 = document.getElementById("Terça6")
    var q = document.getElementById("Quarta")
    var q2 = document.getElementById("Quarta2")
    var q3 = document.getElementById("Quarta3")
    var q4 = document.getElementById("Quarta4")
    var q5 = document.getElementById("Quarta5")
    var q6 = document.getElementById("Quarta6")
    var Md = document.getElementById("Domingo")
    var Ms = document.getElementById("SegundaM")
    var Mt = document.getElementById("TerçaM")
    var Mqa = document.getElementById("QuartaM")
    var Mqi = document.getElementById("Quinta")
    var Mse = document.getElementById("Sexta")
    var Msa = document.getElementById("Sábado")
    if(dia == 1 || dia == 3 || dia == 0){
             s.style.display = 'block'
             s2.style.display = 'block'
             s3.style.display = 'block'
             s4.style.display = 'block'
             s5.style.display = 'block'
             s6.style.display = 'block'
        }
    if(dia == 2 || dia == 5 || dia == 0){
            t.style.display = 'block'
            t2.style.display = 'block'
            t3.style.display = 'block'
            t4.style.display = 'block'
            t5.style.display = 'block'
            t6.style.display = 'block'
        }
    if(dia == 3 || dia == 6 || dia == 0){
            q.style.display = 'block'
            q2.style.display = 'block'
            q3.style.display = 'block'
            q4.style.display = 'block'
            q5.style.display = 'block'
            q6.style.display = 'block'
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