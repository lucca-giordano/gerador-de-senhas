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

console.log(generateRandomPassword(12));


const slider = document.querySelector('.sliderselector');
const input = document.querySelector('.numselector');

slider.addEventListener('input', function(){
    input.value = slider.value;
})

input.addEventListener('input', function(){
    slider.value = input.value;
})