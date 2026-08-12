let display = document.getElementById("display");

function append(value){

    display.value += value;

}

function clearDisplay(){

    display.value += "";

}

function calculate(){

    try{

        display.value = eval(display.vallue);

    }

    catch{

        alert("biểu thức không hợp lệ!");
    }
}