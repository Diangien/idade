let log = m => console.log(m)

function validar(dia, mes, ano){
    let diaValido = (dia>1 && dia<=31)?true:false
    let mesValido = (mes >1 && mes<=12)?true:false
    let anoValido = ano <= new Date().getFullYear()? true: false
    let mesesArray =[0,31,(isLeapYear(ano)? 29:28),31,30,31,30,31,31,30,31,30,31]
    if(diaValido && mesValido && anoValido && dia <= mesesArray[mes]){
        console.log("Data Valida")
    }else{
        console.log("Data Invalida")
    }

}

let isLeapYear = ano => (ano%4==0 && ano%100!=0) || ano %400==0

console.log(validar(30,0,2029))

