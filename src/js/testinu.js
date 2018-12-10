var gg = 'Testinu';
var duomenys = [
    {
        title: "1 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "1",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "2 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "2",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "3 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "3",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "4 kambarių g. Palangoje",
        gyvenviete: "Šiauliai",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "4",
        plotas: "65,26",
        aukstas: "5"
    },
    {
        title: "5 kambarių g. Palangoje",
        gyvenviete: "Šiauliai",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "5",
        plotas: "65,26",
        aukstas: "4"
    },
    {
        title: "6 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "6",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "7 kambarių g. Palangoje",
        gyvenviete: "Šiauliai",
        gatve: "Malronio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "7",
        plotas: "65,26",
        aukstas: "3"
    },
    {
        title: "8 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "45000",
        bukle: "Įrengtas",
        kambariu_sk: "8",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "9 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "5000",
        bukle: "Įrengtas",
        kambariu_sk: "9",
        plotas: "65,26",
        aukstas: "2"
    },
    {
        title: "10 kambarių g. Palangoje",
        gyvenviete: "Šiauliai",
        gatve: "Maironio",
        kaina: "15000",
        bukle: "Įrengtas",
        kambariu_sk: "1",
        plotas: "66,26",
        aukstas: "2"
    },
    {
        title: "12 kambarių g. Palangoje",
        gyvenviete: "Palanga",
        gatve: "Maironio",
        kaina: "25000",
        bukle: "Įrengtas",
        kambariu_sk: "1",
        plotas: "66,26",
        aukstas: "2"
    }
];

var paieskosZodziaiObj = {
    title: "1",
    gyvenviete: "",
    gatve: "",
    kaina: "",
    bukle: "",
    kambariu_sk: "1",
    plotas: "65",
    aukstas: ""
}

var paieskosZodziaiArr = Object.values(paieskosZodziaiObj)

var dd = duomenys.filter(function(objektas, index){
    console.log('*************** ' + index + ' **************');
    
    //pereinam per ieskomus, netuscius kriterijus ir jei jie sutampa galutinis ats. true
    //todo: pakeisti OBJECT.VALUES metodu/loop kuris palaikomas IE
    var lyginamasObj = Object.values(objektas);
    console.log("lyginamasObj: " + lyginamasObj);
    console.log("paieskosZodziaiArr: " + paieskosZodziaiArr);
    var ats = false;
    var i = 0;

    while (i < paieskosZodziaiArr.length) {
        console.log('Tikriname ' + i + ' el.  ' + lyginamasObj[i] + ' ar turi "' + paieskosZodziaiArr[i] + '" savyje ');
        
        // paieskos laukas ne tuscias
        if (paieskosZodziaiArr[i] !== '') {
            // Tikriname String type reiksme su indexOF
            if (isNaN(lyginamasObj[i]) && paieskosZodziaiArr[i] !== '' ) {
                if (lyginamasObj[i].indexOf(paieskosZodziaiArr[i]) >= 0) {
                    console.log('Turi');
                    ats = true;
                } else {
                    console.log('Neturi');
                    ats = false;
                    break;
                }
            } else {
            // Tikriname Number type reiksme su ===    
                if ((paieskosZodziaiArr[i] === lyginamasObj[i])) { 
                    console.log('Turi');
                    ats = true;
                } else {
                    console.log('Neturi');
                    ats = false;
                    break; 
                }
            }
        }       
        i++;
    };
    return ats;
})

console.log(dd);


var ff = duomenys.filter(function(objektas, index){
   
    //pereinam per ieskomus, netuscius kriterijus ir jei jie sutampa galutinis ats. true
    //todo: pakeisti OBJECT.VALUES metodu/loop kuris palaikomas IE
    var lyginamasObj = Object.values(objektas);
    var ats = false;
    var i = 0;

    while (i < paieskosZodziaiArr.length) {       
        if (paieskosZodziaiArr[i] !== '') {
            if (isNaN(lyginamasObj[i]) && paieskosZodziaiArr[i] !== '' ) {
                if (lyginamasObj[i].indexOf(paieskosZodziaiArr[i]) == -1) {
                    console.log('Neturi');
                    ats = false;
                    break;
                } else {
                    console.log('Turi');
                    ats = true;
                }
            } else {
                if ((paieskosZodziaiArr[i] === lyginamasObj[i])) { 
                    ats = true;
                } else {
                    ats = false;
                    break; 
                }
            }
        }       
        i++;
    };
    return ats;
})

// console.log(ff);

var rr = duomenys.filter(function(objektas, index) {
    var ats = true; // nes jei paieskos zodziu nera reikia grazinti visus arr objektus
    // tikriname paieskosZodziaiObj netuscius raktus su objektas.raktais ar turi savy
    //jei taip - return true, jei ne - return false
    console.log('*********************** ' + index+ ' **********************');
    
    for (const key in paieskosZodziaiObj) {
        if (paieskosZodziaiObj.hasOwnProperty(key) && paieskosZodziaiObj[key] !== '') {
            console.log(key + ' reiksme ' + paieskosZodziaiObj[key]);
            if (key in objektas) {
                console.log('Tikrinamas obj. turi property ' + key );                
                if (objektas[key].indexOf(paieskosZodziaiObj[key]) == -1) return false
            } else {
                // obj neturi tokio property metam is rezultatu ir baigiam su siuo elementu
                return false;
            }
        }
    }
    return ats;    
})

console.log(rr);
