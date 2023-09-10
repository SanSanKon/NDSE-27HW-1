const readline = require('readline');

let randomNumber = Math.round(Math.random() * 100);

const readLineTerminal = readline.createInterface(process.stdin, process.stdout);

readLineTerminal.setPrompt('Загадано число в диапазоне от 0 до 100. Введите число: ');
readLineTerminal.prompt();

readLineTerminal.on('line', (number) => {
    let userAnswer = parseInt(number);

    if(userAnswer > randomNumber) {
        console.log('Загаданное число меньше введенного. Попробуйте еще раз.')
    } else if(userAnswer < randomNumber) {
        console.log('Загаданное число больше введенного. Попробуйте еще раз.')
    } else if(userAnswer === randomNumber) {
        console.log(`Отгадано! Загаданное число было: ${randomNumber}`);
        process.exit(0);
    } else {
        console.log('Вводимое значение должно быть числом. Повторите ввод.');
    }
})

