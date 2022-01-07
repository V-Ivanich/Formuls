let dia1 = document.querySelector('.diamDet');
let dia2 = document.querySelector('.diamProb');
let cvet1 = document.querySelector('.nDet');
let cvet2 = document.querySelector('.nProb');
let ress = 0;
let d1,d2;
let n1,n2;

function resetCvet() {
    dia1.value = '';
    dia2.value = '';
    cvet1.value = '';
    cvet2.value = '';
}

function scanItem(){
    d1 = +dia1.value;
    d2 = +dia2.value;
    n1 = +cvet1.value;
    n2 = +cvet2.value;
}

resetCvet();

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
    document.querySelector('.metka').textContent = 'Результат =  ' + parseFloat(ress.toFixed(2));
})
//сброс цвета
document.querySelector('.reset-1').addEventListener('click', () => {
    resetCvet();
    document.querySelector('.metka').textContent = 'Результат =  ';
})

//расчет плоской фаски
let diaDet = document.querySelector('#diaDet');
let maxD = document.querySelector('#maxDet');
let minD = document.querySelector('#minDet');
let diaSvet = document.querySelector('#diaSvet');
let maxS = document.querySelector('#maxSvet');
let minS = document.querySelector('#minSvet');
let dD, maD, miD;
let dS, maS, miS;
let mmaD, mmiD, mmaS, mmiS;

function resetFaska() {
diaDet.value = '';
maxD.value = '';
minD.value = '';
diaSvet.value = '';
maxS.value = '';
minS.value = '';
}

function scanFaska () {
    dD = +diaDet.value;
    maD = +maxD.value;
    miD = +minD.value;
    dS = +diaSvet.value;
    maS = +maxS.value;
    miS = +minS.value;
}

resetFaska();
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
   
    document.querySelector('.metka-2').textContent = 'Результат =  ' +  parseFloat(ress.toFixed(2)) + ' +' +  parseFloat(maS.toFixed(3));
})

//сброс плоской фаски
document.querySelector('.reset-2').addEventListener('click', () => {
    resetFaska();
    document.querySelector('.metka-2').textContent = 'Результат =  ';
})

// расчет плоских блоков
let numbersRow;//количество в ряду
let totalDetails;//общее количество на данный момент на блоке
let diameterDetails = document.querySelector('.inp-2');//диаметр детали
let numberDetails = document.querySelector('.inp-1');//Всего деталей
let diameterBlocks = document.querySelector('.inp-3');//диаметр блока, если надо
let riad;//номер ряда
let zaz = 2;//зазор между деталями, в частности между рядами
let diamRasch, pol_20, pol_25;
let numDet;
let diDetal;
let diaBlock;

function resetBloki() {
numberDetails.value = '';
diameterDetails.value = '';
diameterBlocks.value = '';
}

document.querySelector('.inp-3').disabled = true;

function scanBlocks () {
    numDet = +numberDetails.value;
    diDetal = +diameterDetails.value;
    diaBlock = +diameterBlocks.value;
}

resetBloki();
function myZagolovok() {

    //дальше расчет и создание динамической таблицы
//первая таблица, заголовок и цвета

let colorSpan = `
<col span="1" style="background:rgb(177, 156, 128)">
<col span="1" style="background-color:LightCyan">
<col span="1" style="background-color:rgb(154, 180, 180)">
<col span="1" style="background-color:rgb(146, 107, 75)">`;


let groupSpan = document.createElement('colgroup');
groupSpan.setAttribute('class', 'gruppa');
groupSpan.innerHTML =  colorSpan;

document.querySelector('.variant_1').appendChild(groupSpan);

//вторая таблица

let groupSpan_2 = document.createElement('colgroup');
groupSpan_2.setAttribute('class', 'gruppa');
groupSpan_2.innerHTML =  colorSpan;
document.querySelector('.variant_2').appendChild(groupSpan_2);

//третья таблица

let groupSpan_3 = document.createElement('colgroup');
groupSpan_3.setAttribute('class', 'gruppa');
groupSpan_3.innerHTML = colorSpan;

document.querySelector('.variant_3').appendChild(groupSpan_3);
}

const radioB = document.getElementById('chek');
radioB.addEventListener('click', () => {
    if(radioB.checked){
        document.querySelector('.inp-1').disabled = true;
        document.querySelector('.inp-3').disabled = false;
    }
    else {
        document.querySelector('.inp-1').disabled = false;
        document.querySelector('.inp-3').disabled = true;
    }
})

//расчет по кнопке
document.querySelector('.rezult').addEventListener('click', () => {
    myZagolovok();
    scanBlocks();

    function polirovnik (diamRasch) {
        pol_20 = (diamRasch * 20)/ 100;
        pol_25 = (diamRasch * 25)/ 100;
        info.textContent = 'Диаметр полировника = ' +  parseFloat((pol_20 + diamRasch).toFixed(1)) + 'мм' +
        ' - ' +  parseFloat((pol_25 + diamRasch).toFixed(1)) + 'мм';
    }
    
    let rr2 =0;
    riad =1;
    numbersRow = 1;
    let rr = diDetal/2;//радиус детали
    totalDetails = numbersRow;
    rr2 = (rr * 2);

    let row = document.createElement('tr');
    row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
    document.querySelector('.variant_1').appendChild(row);

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

        row = document.createElement('tr');
        row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
        document.querySelector('.variant_1').appendChild(row);
        
    }

    rr2 =0;
    numbersRow = 3;
    riad =1;
    totalDetails = numbersRow;
    rr = ((diDetal + zaz) * Math.sqrt(3)) / 3;
    rr = Math.round(rr + diDetal/2);
    rr2 = rr * 2;

    row = document.createElement('tr');
    row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
    document.querySelector('.variant_2').appendChild(row);

    while((totalDetails + 6) <= numDet) {
        riad++;
        numbersRow += 6;  
        rr += ( diDetal + zaz);
        totalDetails += numbersRow;
        rr2 = (rr * 2);

        row = document.createElement('tr');
        row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
        document.querySelector('.variant_2').appendChild(row);
        
    }


    rr2 =0;
    numbersRow = 4;
    riad =1;
    totalDetails = numbersRow;
    let katet = diDetal + zaz;
    let gipotenuza =(Math.sqrt(Math.pow(katet, 2) * 2));
    rr = Math.round(gipotenuza / 2 + (diDetal / 2));
    rr2 = (rr * 2);

    row = document.createElement('tr');
    row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
    document.querySelector('.variant_3').appendChild(row);

    while((totalDetails + 6) <= numDet) {
        riad++;
        numbersRow += 6;  
        rr += ( diDetal + zaz);
        totalDetails += numbersRow;
        rr2 = (rr * 2);

        row = document.createElement('tr');
        row.innerHTML = `<td>${riad}</td><td>${numbersRow}</td><td>${totalDetails}</td><td>${rr2}</td>`;
        document.querySelector('.variant_3').appendChild(row);
        
    }


//выделение яцеек таблицы
//для первой таблицы
let table = document.querySelector('.variant_1');
let info = document.querySelector('.metka-3');
let tds = table.querySelectorAll('td');

function resetActive(argum) {

	for(var i = 0; i < argum.length; i++) {
		if(argum[i].classList.contains('active')){ 
			argum[i].classList.remove('active');
		}
		else continue
	}
    
}

for (var i = 0; i < tds.length; i++){
    if (tds[i].cellIndex == 3) {
        tds[i].addEventListener('click', function() {       
            resetActive(tds);
            resetActive(tds2);
            resetActive(tds3);
            this.classList.add('active');
            diamRasch = +this.innerText;
            polirovnik (diamRasch);
    });
    } else continue
}

//для второй таблицы
let table_2 = document.querySelector('.variant_2');
let tds2 = table_2.querySelectorAll('td');

for (var i = 0; i < tds2.length; i++){
    if (tds2[i].cellIndex == 3) {
        tds2[i].addEventListener('click', function() {       
            resetActive(tds);
            resetActive(tds2);
            resetActive(tds3);
            this.classList.add('active');
            diamRasch = +this.innerText;
            polirovnik (diamRasch);
    });
    } else continue
}

//для третьей таблицы
let table_3 = document.querySelector('.variant_3');
let tds3 = table_3.querySelectorAll('td');

for (var i = 0; i < tds3.length; i++){
    if (tds3[i].cellIndex == 3) {
        tds3[i].addEventListener('click', function() {       
            resetActive(tds);
            resetActive(tds2);
            resetActive(tds3);
            this.classList.add('active');
            diamRasch = +this.innerText;
            polirovnik (diamRasch);
    });
    } else continue
}

});//конец обработки по кнопке расчета блоков

// сброс таблиц

document.querySelector('.sbros').addEventListener('click', () => {
 
    for (let i = document.querySelector('.variant_1').getElementsByTagName('tr').length - 1; i; i--) {
        document.querySelector('.variant_1').deleteRow(i);
    }
    for (let i = document.querySelector('.variant_2').getElementsByTagName('tr').length - 1; i; i--) {
        document.querySelector('.variant_2').deleteRow(i);
    }
    for (let i = document.querySelector('.variant_3').getElementsByTagName('tr').length - 1; i; i--) {
        document.querySelector('.variant_3').deleteRow(i);
    }

    resetBloki();
    document.querySelector('.metka-3').textContent = 'Диаметр полировника =';

})
