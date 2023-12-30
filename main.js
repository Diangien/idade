//TextBoxes
let $txtMes = document.getElementById('txtMes')
let $txtDia = document.getElementById('txtDia')
let $txtAno = document.getElementById('txtAno')
//Labels
let $lbDia = document.getElementById('dia')
let $lbMes = document.getElementById('mes')
let $lbAno = document.getElementById('ano')
//Button

let $btn = document.getElementById('btn-calc')

$btn.accessKey = "v"

$btn.addEventListener("click",(evt)=>{

    let dia = $txtDia.value
    let mes = $txtMes.value
    let ano = $txtAno.value
    console.log(validar(dia,mes,ano))
    if(validar($txtDia.value, $txtMes.value,$txtAno.value)){
        alert("Passou")
        let idade = (new Date().getFullYear() - ano).toString()
        let mesesIdade = (new Date().getMonth() - mes).toString()
        $lbAno.innerHTML = idade
        $lbMes.innerHTML = mesesIdade
    }else{
        alert("Nao passou")
    }
})




function validar(dia, mes, ano){
    let diaValido = (dia>1 && dia<=31)?true:false
    let mesValido = (mes >1 && mes<=12)?true:false
    let anoValido = ano <= new Date().getFullYear()? true: false
    let mesesArray =[0,31,(isLeapYear(ano)? 29:28),31,30,31,30,31,31,30,31,30,31]
    if(diaValido && mesValido && anoValido && dia <= mesesArray[mes]){
        return true
    }else{
        return false
    }

}

let isLeapYear = ano => (ano%4==0 && ano%100!=0) || ano %400==0

var log = v = console.log(v)