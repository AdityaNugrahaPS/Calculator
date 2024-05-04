// Project 1 - Calculator Program 

const display = document.getElementById("display");

function appendToDisplay(input) { //menampilkan inputan ke display
    display.value += input
}

function clearDisplay(){
    display.value = ''
}

function calculate() { //meghitung hasil
    try {
        display.value = eval(display.value)
    } catch(error) {
        display.value = 'error'
    }

}