function generateRandomPassword(length) {

    let charset = ''

    const maiusculas = document.querySelector('.tallcheck')
    if(maiusculas.checked){
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    const minusculas = document.querySelector('.smallcheck')
    if(minusculas.checked){
        charset += 'abcdefghijklmnopqrstuvwxyz'
    }

    const numeros = document.querySelector('.numcheck')
    if(numeros.checked){
        charset += '0123456789'
    }

    const simbolos = document.querySelector('.symcheck')
    if(simbolos.checked){
        charset += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }

    let password = '';
    let values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    for (let i = 0; i < length; i++) {
        password += charset[values[i] % charset.length];
    }
    console.log(password);
    return password;
}



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.sliderselector');
    const number = document.querySelector('.numselector')
    
    slider.addEventListener('input', function() {
        number.value = this.value;
    });

    number.addEventListener('input', function() {
        slider.value = this.value;
    });


    const passdisplay = document.querySelector('.passdisplay');
    const generatebutton = document.querySelector('.passbutton');
    generatebutton.addEventListener('click', () => {
        const password = generateRandomPassword(slider.value);
        passdisplay.value = password;
    });

    const copybutton = document.querySelector('.copybutton');
    copybutton.addEventListener('click', () => {
        passdisplay.select();
        document.execCommand('copy');
    });
});