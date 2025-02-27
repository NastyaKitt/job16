function scrollToRef() {
    const target = document.getElementById('tel');
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const elements = document.querySelectorAll('#HR');

elements.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToRef();
    });
});
// 

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    // Изменяем здесь, если это нужно
    var input = document.querySelector("#tel");
    
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});

// 

let winPopup = document.getElementById('winPopup')
let clsButt = document.getElementById('clsButt')
let callPopup = document.getElementById('callPopup')

callPopup.addEventListener('click',function(){
    winPopup.classList.add('show')
})

clsButt.addEventListener('click',function(){
    winPopup.classList.remove('show')
})