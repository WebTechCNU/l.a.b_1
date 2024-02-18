const inputNumber = document.getElementById('input-number');
const button = document.getElementById('check-button');
const array = document.getElementById('array');

let numbers = [];
button.addEventListener('click', () => {
    console.log(inputNumber.value);
    
    if(inputNumber.value < 1){
        inputNumber.value = '';
        alert('Введіть будь яке число');
        return;
    }
    if(!Number(inputNumber.value)){
        inputNumber.value = '';
        alert('Введено невірний формат');
        return;
    }
    for( let i = 0; i < numbers.length; i++){
        if(numbers[i] === inputNumber.value){
            inputNumber.value = ''; 
            alert('Число вже було введено!');
            return;
        }
    }
    numbers.push(inputNumber.value);
    inputNumber.value = '';

    array.innerHTML = numbers;
});