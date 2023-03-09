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

    const output = document.querySelector('.slider-value');
    
    slider.addEventListener('input', function() {
        output.textContent = this.value;
        number.value = this.value;
    });

    number.addEventListener('input', function() {
        output.textContent = this.value;
        slider.value = this.value;
    });
});