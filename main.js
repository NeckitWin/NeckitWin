let main = document.querySelector('main');
let colorBtn = document.querySelector('#color-btn');

colorBtn.addEventListener('click', function() {
    if (main.style.backgroundColor === 'black') {
        main.style.backgroundColor = 'white';
    } else {
        main.style.backgroundColor = 'black';
    }
});