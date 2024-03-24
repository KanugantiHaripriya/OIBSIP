const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.value === 'AC') {
            display.value = '';
        } else if (button.dataset.value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (button.dataset.value === '=') {
            display.value = eval(display.value);
        } else {
            display.value += button.dataset.value;
        }
    });
});