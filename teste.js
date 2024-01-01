function DiferenceDays(d1,d2){

    let data1 = {
        dia : d1.getDate(),
        mes :d1.getMonth(),
        ano :d1.getFullYear()
        
    }

    let data2 = {
        dia : d2.getDate(),
        mes :d2.getMonth(),
        ano :d2.getFullYear()
    }
    
    let isLeapYear = ano => (ano%4==0 && ano%100!=0) || ano %400==0
    let mesesArray =[0,31,(isLeapYear(d1.ano)? 29:28),31,30,31,30,31,31,30,31,30,31]
    let dia_aux=data1.dia
    let cont_aux =0

    while(dia_aux <mesesArray[data1.mes]){
        dia_aux++
        cont_aux++
    }
    
    
}


console.log(DiferenceDays(new Date(2023,1,20),new Date(34,67,88)))


/**
 * 20 de Janeiro de 2022
 * 30 de Dezembro de 2023
 */

/**
 * 1ANo
 * 
 */