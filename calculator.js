// let result =document.getElementById("textarea");
// let calc=(number)=>{
//  result.value+=number;
// }

// function clear(){
    
// }


var textArea = document.getElementById("textArea");

function calc(input){
    textArea.value += input;
}
function equalTo(){
    textArea.value = eval(textArea.value);
}

function deleteInput(){
    textArea.value= textArea.value.toString().slice(0,-1);
}

function clearInput(){
    document.getElementById("textArea"). value = ' ';
    
}