var output = document.getElementById("form");
var numbers = [];
var resultat ;
var values = [];
var v;
var listener = false;
var pross;
function getNum(num){
    v = num.getAttribute("data-num")
    values.push(v)
    afficher()
}
function toInt(j){
    let i = 0;
    let strnums= "";
    let ntstrnums;
    let num;
    while(i<j.length){
        strnums = strnums + j[i]
        i++;
    }
    ntstrnums = Number(strnums)
    return ntstrnums;
}
function checkThepross(num){
    let value = num.getAttribute("data-num")
    output.value = value;
    if (value == "*"){
        pross = "multi"
    }
    else if (value =="/"){
        pross = "divi"
    }
    else if (value == "-"){
        pross = "soust"
    }
    else {
        pross = "add"
    }
    switchTo()
}
function afficher(){
    var i = 0;
    output.value = ""
    do {
        output.value = output.value + values[i];
        i++;
    }while(i<values.length)
    if (listener == true){
        numbers.push(values)
        values = [];
    }
}

function switchTo(){
    let tmp = toInt(values);
    numbers.push(tmp)
    values = []
    console.log(numbers);
    
}

function resultf(){
    switchTo()
    if (pross == "multi"){
        console.log(numbers)
        var tmp = 1;
        for (let i = 0; i<numbers.length; i++){
            tmp = tmp*numbers[i];
        }
        console.log(tmp)
    }
    else if(pross =="divi"){
        console.log(numbers)
        var tmp = numbers[0]/numbers[1]
        console.log(tmp)
    }
    else if(pross == "soust"){
        console.log(numbers)
        var tmp = numbers[0]-numbers[1]
        console.log(tmp)
    }
    else{
        var tmp = 0;
        console.log(numbers)
        for (let i = 0; i<numbers.length; i++){
            tmp = tmp + numbers[i];
        }
        console.log(tmp)
    }
    resultat = tmp;
    output.value = resultat;
    cleardata()
}
function cleardata(){
    numbers = [];
    resultat = 0 ;
    values = [];
    v = 0;
    listener = false;
}
function clearf(){
    numbers = [];
    resultat = 0 ;
    values = [];
    v = 0;
    listener = false;
    output.value= ""
}
// class calculator {
//     constructor(){
//         this.value = 0;
//         this.pross;
//         this.result = 0;
//     }
//     output = document.getElementById("form");
//     getNum(num){
//         value = num.getAttribute("data-num")
//         output.value = value;
//         this.value = value;
//     }
    // checkThepross(){
    //     list = ["*","/","-","="];
    //     for (i in list){
    //         if (this.value == list[i]){
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    //     }
        
    // }


// }