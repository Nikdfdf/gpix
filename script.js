const img = document.querySelector('.search__img'),
    modal = document.querySelector('.modal'),
    modalItem = document.querySelector('.modal-item'),
    itemInput = document.querySelector('.item__input');

img.addEventListener('click', () => {
    if (img.classList.contains('active')) {
        img.classList.remove('active');
        modal.classList.remove('active');
    }
    else {
        img.classList.add('active');
        modal.classList.add('active');
    }
});

modal.addEventListener('click', function(e) {    
    if(e.target !== modal ) {
        this.classList.add('active');
    }
    else {
        this.classList.remove('active');
        img.classList.remove('active');
    }    
});


const menuBtn = document.querySelector('.header-mobail'),
    show = document.querySelector('.header-menu');

menuBtn.addEventListener('click', function() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        show.classList.remove('active');
    }
    else {
        this.classList.add('active');
        show.classList.add('active');
    }
});

show.addEventListener('click', function(e) {
    if(e.target == show ) {
        menuBtn.classList.add('active');
        show.classList.add('active');
    }
    else {
        menuBtn.classList.remove('active');
        show.classList.remove('active');
    }
});


const changeModal = document.querySelector('.header-modal');
setTimeout(() => {
    changeModal.classList.add('active');
}, 3000)


const body = document.querySelector('body');
body.addEventListener('click', function(e) {
    if (e.taget !== changeModal) {
        changeModal.classList.remove('active');
    }
});
