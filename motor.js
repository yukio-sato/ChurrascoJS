let adultAlc, normalAdult, childe;
// Após carregar, iniciar os eventos em JS
document.addEventListener("DOMContentLoaded",function(){
    adultAlc = document.getElementById("adultoAl").value;
    normalAdult = document.getElementById("adulto").value;
    childe = document.getElementById("childing").value;

    document.getElementById("adultoAl").addEventListener("keyup",number_updt);
    document.getElementById("adultoAl").addEventListener("change",number_updt);
    document.getElementById("adulto").addEventListener("keyup",number_updt);
    document.getElementById("adulto").addEventListener("change",number_updt);
    document.getElementById("childing").addEventListener("keyup",number_updt);
    document.getElementById("childing").addEventListener("change",number_updt);
});

// Variavel que atualiza os NR

const fixer = function(sended){
    let fixedNR = sended.value;
    if (fixedNR < 0){
        fixedNR = 0;
    }
    else if (fixedNR > 99){
        fixedNR = 99;
    }
    sended.value = fixedNR;
    return fixedNR;
}

const shopMath = function(whatOf, adultAmount, childs, tiper){
    let strReturn = "???";
    let everyone = Number(adultAmount)+Number(childs);
    if (whatOf == "Beef"){
        strReturn = (400*adultAmount+200*childs);
    }
    else if (whatOf == "Comp"){
        strReturn = (200*everyone);
    }
    else if (whatOf == "Bear"){
        strReturn = (2000*adultAlc);
    }
    else if (whatOf == "Refri"){
        strReturn = (500*everyone);
    }
    else if (whatOf == "HDeuxO"){
        strReturn = (400*everyone);
    }
    if (Number(strReturn) >= 1000){
        if (tiper == 1){
            strReturn = String(strReturn).substring(0,String(strReturn).length-3)+" Kg ("+strReturn+" g)";
        }
        else if (tiper == 2){
            strReturn = String(strReturn).substring(0,String(strReturn).length-3)+" L ("+strReturn+" ml)";
        }
    }
    else{
        if (tiper == 1){
            strReturn = strReturn+" g";
        }
        else if (tiper == 2){
            strReturn = strReturn+" ml";
        }
    }

    return strReturn;
}

const number_updt = function(){
    adultAlc = fixer(document.getElementById("adultoAl"));
    normalAdult = fixer(document.getElementById("adulto"));
    childe = fixer(document.getElementById("childing"));
    let allAdult = Number(adultAlc)+Number(normalAdult);

    document.getElementById("meat").textContent = "Carne: "+shopMath("Beef",allAdult,childe,1);
    document.getElementById("company").textContent = "Acompanhamentos: "+shopMath("Comp",allAdult,childe,1);
    document.getElementById("bear").textContent = "Cerveja: "+shopMath("Bear",0,0,2);
    document.getElementById("refri").textContent = "Refri: "+shopMath("Refri",allAdult,childe,2);
    document.getElementById("h2o").textContent = "Água: "+shopMath("HDeuxO",allAdult,childe,2);
}

