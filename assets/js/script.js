function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
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
    const button = document.querySelector('.passbutton');
    button.addEventListener('click', () => {
        const password = generateRandomPassword(slider.value);
        passdisplay.value = password;
    });


});