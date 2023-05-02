import  "./htmlcode.js";


let caps = false;
const keys = document.querySelectorAll(".key");
addEventListener('keydown',  (event)=>{

    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const key2 = document.querySelector(`.key[data-key="${event.code}"]`);
    if (key){
        key.classList.add('active');

        if (event.keyCode === 20 && !caps) {// Caps-lock
            const number = Array.from({length: 26}, (_, i) => 65 + i); // массив чисел от 65 до 90
            const selector = number.map(key => `[data-key="${key}"]`).join(', '); // селектор
            const elements = document.querySelectorAll(selector); // выбор элементов
            for (let item of elements) {
                item.textContent = item.textContent.toUpperCase();

            }
            const Lock = document.querySelector('.CapsLock');
            Lock.classList.add('active');
            caps = true;
        }
            else if (event.keyCode === 20 && caps) {//Caps-lock
            const number = Array.from({length: 26}, (_, i) => 65 + i); // массив чисел от 65 до 90
            const selector = number.map(key => `[data-key="${key}"]`).join(', '); // селектор
            const elements = document.querySelectorAll(selector); // выбор элементов
            for (let item of elements) {
                item.textContent = item.textContent.toLowerCase();
            }
            const Lock = document.querySelector('.CapsLock');
            Lock.classList.remove('active');
            caps = false;
        }
    }

    if (key2){
        key2.classList.add('active');
    }

})
addEventListener("keyup", (event)=>{
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const key2 = document.querySelector(`.key[data-key="${event.code}"]`);
    if (key){
        if (event.keyCode === 20){ //Caps-lock
            return;
        }
        key.classList.remove('active');

    }
    if (key2){
        key2.classList.remove('active');
    }
})

const textarea = document.querySelector('textarea');
keys.forEach((key)=>{
    key.addEventListener('click',(event)=>{
        if (event.target.classList.contains('Tab')){
            textarea.value += '\t';
        }
        else if (event.target.classList.contains('BackSpace')){
            event.preventDefault();
            textarea.value = textarea.value.substring(0,textarea.value.length - 1);
        }
        else if (event.target.classList.contains('Enter')){
            event.preventDefault();
            textarea.value += '\n';
        }
        else if (event.target.classList.contains('Delete')){
            const startPos = textarea.selectionStart; // Получаем начальную позицию курсора
            const value = textarea.value; // Получаем текущее значение текстового поля
            textarea.value = value.slice(0, startPos) + value.slice(startPos + 1); // Удаляем символ в позиции после курсора
            textarea.setSelectionRange(startPos, startPos); // Устанавливаем курсор в позицию после удаленного символа
        }
        else if (event.target.classList.contains('CapsLock') && !caps){
            const number = Array.from({length: 26}, (_, i) => 65 + i); // массив чисел от 65 до 90
            const selector = number.map(key => `[data-key="${key}"]`).join(', '); // селектор
            const elements = document.querySelectorAll(selector); // выбор элементов
            for (let item of elements) {
                item.textContent = item.textContent.toUpperCase();

            }
            const lock = document.querySelector('.CapsLock');
            lock.classList.add('active');
            caps = true;
        }
        else if (event.target.classList.contains('CapsLock') && caps){
            const number = Array.from({length: 26}, (_, i) => 65 + i); // массив чисел от 65 до 90
            const selector = number.map(key => `[data-key="${key}"]`).join(', '); // селектор
            const elements = document.querySelectorAll(selector); // выбор элементов
            for (let item of elements) {
                item.textContent = item.textContent.toLowerCase();

            }
            const Lock = document.querySelector('.CapsLock');
            Lock.classList.remove('active');
            caps = false;
        }
        else if (event.target.classList.contains('MetaLeft')){
            return;
        }
        else if (event.target.classList.contains('shift')){
            return;
        }
        else if (event.target.classList.contains('ctr')){

        }
        else if (event.target.classList.contains('alt')){

        }
        else{ textarea.value += key.textContent;}

    })
})
document.addEventListener('keydown',(event)=>{
    if (event.keyCode === 18) { // если нажата клавиша Alt
        event.preventDefault();
    }else if (event.keyCode === 38) {//ArrUp
        textarea.value += '▲'
    }
    else if (event.keyCode === 37) {//ArrLeft
        textarea.value += '◄'
    }
    else if (event.keyCode === 40) {//ArrDown
        textarea.value += '▼'
    }
    else if (event.keyCode === 39) {//ArrRight
        textarea.value += '►'
    }
    else  if (event.keyCode === 9){ // Tab
        event.preventDefault();
        textarea.value += '\t';
    }
    else if (event.keyCode === 13){ //Enter
        textarea.value += '\n';
    }
    else if (event.keyCode === 8){ //Backspace
        event.preventDefault();
        textarea.value = textarea.value.substring(0,textarea.value.length - 1);
    }
    else  if (event.keyCode === 46) { //  Delete
        const startPos = textarea.selectionStart; // Получаем начальную позицию курсора
        const value = textarea.value; // Получаем текущее значение текстового поля
        textarea.value = value.slice(0, startPos) + value.slice(startPos + 1); // Удаляем символ в позиции после курсора
        textarea.setSelectionRange(startPos, startPos); // Устанавливаем курсор в позицию после удаленного символа
        event.preventDefault(); // Отменяем стандартное поведение браузера
    }
    else if (event.keyCode === 91) { // Meta
        return;
    }
    else if (event.keyCode === 20){ //Caps-lock

    }
    else if (event.ctrlKey){ //CTR

    }
    else if (event.key === 'Shift'){

    }
    else { textarea.value += event.key;}
})

                                    /*Shift press*/
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Shift'){
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let char = key.innerHTML.trim();
            let index = lowerCaseChars.indexOf(char);
            if (index !== -1) {
                key.innerHTML = upperCaseChars[index];
            }
        }

    }
})
document.addEventListener('keyup', (event)=>{
    if (event.key === 'Shift'){
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let char = key.innerHTML.trim();
            let index = upperCaseChars.indexOf(char);
            if (index !== -1) {
                key.innerHTML = lowerCaseChars[index];
            }
        }
    }
})
                                     /*Shift click*/
document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains("shift")) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let char = key.innerHTML.trim();
            let index = lowerCaseChars.indexOf(char);
            if (index !== -1) {
                key.innerHTML = upperCaseChars[index];
            }
        }
    }
});

document.addEventListener('mouseup', function(event) {
    if (event.target.classList.contains("shift")) {
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let char = key.innerHTML.trim();
            let index = upperCaseChars.indexOf(char);
            if (index !== -1) {
                key.innerHTML = lowerCaseChars[index];
            }
        }
    }
});




// Создаем массив символов в верхнем регистре
let upperCaseChars = ['~','!','@','#','$','%','^','&amp;','*','(',')','_','+','Q','W','E',
    'R','T','Y','U','I','O','P','{','}','|','A','S','D','F','G','H','J','K','L',':','"','Z',
    'X','C','V','B','N','M','&lt;','&gt;','?'];

// Создаем массив символов в нижнем регистре
let lowerCaseChars = ['`','1','2','3','4','5','6','7','8','9','0','-','=','q',
    'w','e','r','t','y','u','i','o','p','[',']','\\','a','s','d','f','g','h','j','k','l',';','\'','z',
    'x','c','v','b','n','m',',','.','/'];


