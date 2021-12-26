let dia1 = document.querySelector('.diamDet');
let dia2 = document.querySelector('.diamProb');
let cvet1 = document.querySelector('.nDet');
let cvet2 = document.querySelector('.nProb');
let ress = 0;
let d1,d2;
let n1,n2;

    dia1.value = '';
    dia2.value = '';
    cvet1.value = '';
    cvet2.value = '';

function scanItem(){
    d1 = +dia1.value;
    d2 = +dia2.value;
    n1 = +cvet1.value;
    n2 = +cvet2.value;
}

document.querySelector('.result-1').addEventListener('click', () => {
    scanItem();
    d1 *= d1;
    d2 *= d2;
    if (n1 == 0){
       ress =((d1 * n2) / d2); 
    }
    else {
        ress =((d2 * n1) / d1); 
    }
    
    console.log(d1);
    console.log(d2);
    console.log(n1);
    console.log(n2);
    console.log(ress);

    document.querySelector('.metka').innerHTML = 'Результат =  ' + (ress.toFixed(2));
})

let diaDet = document.querySelector('#diaDet');
let maxD = document.querySelector('#maxDet');
let minD = document.querySelector('#minDet');
let diaSvet = document.querySelector('#diaSvet');
let maxS = document.querySelector('#maxSvet');
let minS = document.querySelector('#minSvet');
let dD, maD, miD;
let dS, maS, miS;
let mmaD, mmiD, mmaS, mmiS;

function scanFaska () {
    dD = +diaDet.value;
    maD = +maxD.value;
    miD = +minD.value;
    dS = +diaSvet.value;
    maS = +maxS.value;
    miS = +minS.value;
}

document.querySelector('.result-2').addEventListener('click', () => {
    scanFaska();
    mmaD = dD + maD;
    mmiD = dD + miD;
    mmaS = dS + maS;
    mmiS = dS + miS;
    dD = mmaD - mmaS;
    dS = mmiD - mmiS;
    dD /=2;
    dS /=2;

    if (dD > dS) {
        maS = dD - dS;
        ress = dS;
    }
    else {
        maS = dS -dD;
        ress = dD; 
    }
    console.log(dD);
    console.log(maD);
    console.log(miD);
    document.querySelector('.metka-2').innerHTML = 'Результат =  ' + (ress) + ' +' + (maS.toFixed(2));
})

example_array = [["Name","Age"],["Antonio","35"]];

function array_to_table(my_array) {
    my_table_html = '<table>';
    for(var i =0; i <table my_array.length; i++){
        my_table_html +="<tr>";
        for(var j = 0; j < my_array[i].length; j++){
            my_table_html +="<td>" + my_array[i][j] + "</td>";
        }
        my_table_html += "</tr>";
    }
    my_table_html += '</table>';
    document.getElementById("mytable").innerHTML = my_table_html;
}
array_to_table(example_array);