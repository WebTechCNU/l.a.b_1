const inputNumber = document.getElementById('input-number');
const button = document.getElementById('reverse-button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    if (inputNumber.value === '') {
        alert('Введіть число');
        return;
    }

    for (let i = 0; i < inputNumber.value.length; i++) {
        if (inputNumber.value[i] === '.') {
            alert('Введіть ціле число');
            return;
        }
    }

    let number = inputNumber.value;
    number = number.split(''); // ['1', '2', '3'] - розбиваємо на масив
    console.log(number);
    number = number.reverse(); // ['3', '2', '1'] - реверсимо масив
    console.log(number);
    number = number.join(''); // '321' - з'єднуємо масив в стрічку
    console.log(number);
    result.innerHTML = number
})