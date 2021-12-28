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
   
    document.querySelector('.metka-2').innerHTML = 'Результат =  ' + (ress) + ' +' + (maS.toFixed(2));
})

// расчет плоских блоков
let numbersRow;//количество в ряду
let totalDetails;//общее количество на данный момент на блоке
let diameterDetails = document.querySelector('.inp-2');//диаметр детали
let numberDetails = document.querySelector('.inp-1');//Всего деталей
let diameterBlocks = document.querySelector('.inp-3');//диаметр блока, если надо
let riad;//номер ряда
let zaz = 2;//зазор между деталями, в частности между рядами

let numDet;
let diDetal;
let diaBlock;

function scanBlocks () {
    numDet = +numberDetails.value;
    diDetal = +diameterDetails.value;
    diaBlock = +diameterBlocks.value;
}

let myTable = document.createElement('table');
myTable.setAttribute('class', 'variant_1');
let divTab = document.querySelector('.tabl');
divTab.appendChild(myTable);
let mytitle =document.createElement('caption');
mytitle.innerText = 'Вариант -1';
document.querySelector('.variant_1').appendChild(mytitle);
let groupSpan = document.createElement('colgroup');
groupSpan.setAttribute('class', 'gruppa');
groupSpan.innerHTML = `
<col span="1" style="background:rgb(177, 156, 128)">
<col span="1" style="background-color:LightCyan">
<col span="1" style="background-color:rgb(154, 180, 180)">
<col span="1" style="background-color:rgb(146, 107, 75)">`;
document.querySelector('.variant_1').appendChild(groupSpan);


document.querySelector('.rezult').addEventListener('click', () => {
    scanBlocks();
    riad =1;
    numbersRow = 1;
    let rr = diDetal/2;
    totalDetails = numbersRow;
    let rr2 =0;
    rr2 = (rr * 2);


    let zagolovok = document.createElement('tr');
    zagolovok.innerHTML = `<td>${'Ряд №'}</td><td>${'В ряду'}</td><td>${'Всего'}</td><td>${'Диаметр'}</td>`;
    document.querySelector('.variant_1').appendChild(zagolovok);

    let row = document.createElement('tr');
    row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
    document.querySelector('.variant_1').appendChild(row);

    // document.getElementById('t1r1c2').innerText = numbersRow;
    // document.getElementById('t1r1c3').innerText = totalDetails;
    // document.getElementById('t1r1c4').innerText = (rr * 2);

    while((totalDetails + 6) <= numDet) {
        riad++;
        if(riad == 2){
            numbersRow = 6;
        }
        else {
            numbersRow += 6;  
        }
        rr += ( diDetal + zaz);
        totalDetails += numbersRow;
        rr2 = (rr * 2);

        let row = document.createElement('tr');
        row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
        document.querySelector('.variant_1').appendChild(row);
        // document.getElementById('t1r' + riad + 'c2').innerText = numbersRow;
        // document.getElementById('t1r' + riad + 'c3').innerText = totalDetails;
        // document.getElementById('t1r' + riad + 'c4').innerText = (rr * 2);
        
    }

    console.log( totalDetails);
})
