
const parentElement = document.querySelector("body");
const htmlCode = '<div class="vk">Virtual Keyboard</div>\n' +
    '<textarea></textarea>\n' +
    '<div class="container">\n' +
    '    <div class="keyboard">\n' +
    '        <div class="row">\n' +
    '            <div data-key="192"  class="key">`</div>\n' +
    '            <div data-key="49" class="key">1</div>\n' +
    '            <div data-key="50" class="key">2</div>\n' +
    '            <div data-key="51" class="key">3</div>\n' +
    '            <div data-key="52" class="key">4</div>\n' +
    '            <div data-key="53" class="key">5</div>\n' +
    '            <div data-key="54" class="key">6</div>\n' +
    '            <div data-key="55" class="key">7</div>\n' +
    '            <div data-key="56" class="key">8</div>\n' +
    '            <div data-key="57" class="key">9</div>\n' +
    '            <div data-key="48" class="key">0</div>\n' +
    '            <div data-key="189" class="key">-</div>\n' +
    '            <div data-key="187" class="key">=</div>\n' +
    '            <div data-key="8"  class="key BackSpace">Backspace</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div data-key="9" class="key Tab">Tab</div>\n' +
    '            <div data-key="81" class="key">q</div>\n' +
    '            <div data-key="87" class="key">w</div>\n' +
    '            <div data-key="69" class="key">e</div>\n' +
    '            <div data-key="82" class="key">r</div>\n' +
    '            <div data-key="84" class="key">t</div>\n' +
    '            <div data-key="89" class="key">y</div>\n' +
    '            <div data-key="85" class="key">u</div>\n' +
    '            <div data-key="73" class="key">i</div>\n' +
    '            <div data-key="79" class="key">o</div>\n' +
    '            <div data-key="80" class="key">p</div>\n' +
    '            <div data-key="219" class="key">[</div>\n' +
    '            <div data-key="221" class="key">]</div>\n' +
    '            <div data-key="220" class="key ">\\</div>\n' +
    '            <div data-key="46" class="key Delete ">Del</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div data-key="20" class="key CapsLock">Caps Lock</div> <!--Caps-->\n' +
    '            <div data-key="65" class="key">a</div>\n' +
    '            <div data-key="83" class="key">s</div>\n' +
    '            <div data-key="68" class="key">d</div>\n' +
    '            <div data-key="70" class="key">f</div>\n' +
    '            <div data-key="71" class="key">g</div>\n' +
    '            <div data-key="72" class="key">h</div>\n' +
    '            <div data-key="74" class="key">j</div>\n' +
    '            <div data-key="75" class="key">k</div>\n' +
    '            <div data-key="76" class="key">l</div>\n' +
    '            <div data-key="186" class="key">;</div>\n' +
    '            <div data-key="222" class="key">\'</div>\n' +
    '            <div data-key="13" class="key Enter">Enter</div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div data-key="ShiftLeft" class="key ShiftLeft shift">Shift</div> <!--Left-->\n' +
    '            <div data-key="90" class="key">z</div>\n' +
    '            <div data-key="80" class="key">x</div>\n' +
    '            <div data-key="67" class="key">c</div>\n' +
    '            <div data-key="86" class="key">v</div>\n' +
    '            <div data-key="66" class="key">b</div>\n' +
    '            <div data-key="78" class="key">n</div>\n' +
    '            <div data-key="77" class="key">m</div>\n' +
    '            <div data-key="188" class="key">,</div>\n' +
    '            <div data-key="190" class="key">.</div>\n' +
    '            <div data-key="191" class="key">/</div>\n' +
    '            <div data-key="38" class="key ArrUp">▲</div>\n' +
    '            <div data-key="ShiftRight" class="key ShiftRight shift">Shift</div> <!--Right-->\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div data-key="ControlLeft" class="key CtrLeft ctr">Ctrl</div> <!--Ctrl left-->\n' +
    '            <div data-key="91" class="key MetaLeft">Win</div>\n' +
    '            <div data-key="AltLeft" class="key AltLeft alt">Alt</div> <!--alt left-->\n' +
    '            <div data-key="32" class="key Space"> </div>\n' +
    '            <div data-key="AltRight" class="key AltRight alt">Alt</div> <!--alt right-->\n' +
    '            <div data-key="37" class="key ArrLeft">◄</div>\n' +
    '            <div data-key="40" class="key ArrDown">▼</div>\n' +
    '            <div data-key="39" class="key ArrRight">►</div>\n' +
    '            <div data-key="ControlRight" class="key CtrRight ctr">Ctrl</div> <!--ctrl right-->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>'
parentElement.innerHTML = htmlCode;


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


