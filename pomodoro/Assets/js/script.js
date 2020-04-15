function clock(){
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if(horas < 10){
        horas = "0"+horas
    }
    if(minutos < 10){
        minutos = "0"+minutos
    }
    if(segundos < 10){
        segundos = "0"+segundos
    }

    document.getElementById("relogio").innerHTML=horas+": "+minutos+":"+segundos
}
function getDados(){
    var data = new Date()
    var mes = data.getMonth()
    var dia = data.getDay()
    var diaMes = data.getDate()
    var ano = data.getFullYear()
    dayName = new Array ("domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
    monName = new Array ("Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro")


    document.getElementById("data").innerHTML=dayName[dia]+", "+diaMes+" de "+monName[mes]+" de "+ano
}
window.setInterval("clock()", 1000)

//Cronometro
var contador = 0

function cronometro(){
    var horas = document.getElementById("horas")
    var minutos = document.getElementById("minutos")
    var segundos = document.getElementById("segundos")
    var centesimas = document.getElementById("centesimas")

    
    var h = 0
    var m = 0
    var s = 0
    var d = 0

    contador = setInterval(function(){
        horas.innerHTML = h < 10 ? '0'+h : h
        minutos.innerHTML = m < 10 ? '0'+m : m
        segundos.innerHTML = s < 10  ? '0'+s : s
        centesimas.innerHTML = d < 10 ? '0'+d : d

        if(d < 9){
            d+=1
        }else if(s < 59){
            d = 0
            s+=1
        }else if(m < 59){
            d = 0
            s = 0
            m+=1
        }else if(h < 24){
            d =0
            s =0
            m =0
            h+=1
        }else{
            alert('Infelizmente estourou as 24h!')
        }
    }, 100)
    document.getElementById("inicio").setAttribute('disabled','true')
}
function parar(){
    document.getElementById("inicio").disabled = false
    window.clearInterval(contador)
}
function reinicio(){
    document.getElementById("inicio").disabled = false
    window.clearInterval(contador);
    document.getElementById("horas").innerHTML = "00"
    document.getElementById("minutos").innerHTML = "00"
    document.getElementById("segundos").innerHTML = "00"
    document.getElementById("centesimas").innerHTML = "00"
}

//Contagem Regresiva
var contador = 0
function pomodoro(){
    var minuto = document.getElementById("minuto")
    var segundo = document.getElementById("segundo")

    minuto.innerHTML = '' + 24
    segundo.innerHTML = '59'

    var m = 24
    var s = 59

    contador = setInterval(function(){
        minuto.innerHTML = '' + m
        segundo.innerHTML = '' + s

        if(s>0){
            s -= 1
        }else if(s == 0 && m > 0){
            s = 59
            m -= 1
        }else{
            m = 25
            alert("Seu tempo de trabalho acabou ! Ligue o cronometro e aproveite !")
        }
    },1000)
    document.getElementById("iniciar").setAttribute('disabled','true')
}
function paraPomodoro(){
    document.getElementById("iniciar").disabled = false
    window.clearInterval(contador)
}
function reiniciar(){
    document.getElementById("iniciar").disabled = false
    window.clearInterval(contador);
    document.getElementById("hora").innerHTML = "00"
    document.getElementById("minuto").innerHTML = "25"
    document.getElementById("segundo").innerHTML = "00"
}