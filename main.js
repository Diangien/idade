//TextBoxes
let $txtDia = document.getElementById('#txtDia').value
let $txtMes = document.getElementById('#txtMes').value
let $txtAno = document.getElementById('#txtAno').value
//Labels
let $lbDia = document.getElementById('#dia')
let $lbMes = document.getElementById('#mes')
let $lbAno = document.getElementById('#ano')
//Button

let $btn = document.getElementById('btn-calc')

$btn.addEventListener((evt)=>{
    if($txtAno.checkValidity()){
        alert('ola')
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