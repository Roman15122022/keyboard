export const parentElement = document.querySelector("body");
export const htmlCode = '<div class="vk">Virtual Keyboard</div>\n' +
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
    '</div>';
parentElement.innerHTML = htmlCode;