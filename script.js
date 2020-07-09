function search() {
    const inputSearch = document.querySelector('.form-search__input')
    const imgSearch = document.querySelector('.search__img')
    imgSearch.addEventListener('click', IsSeacrch);
    const body = document.querySelector('body')
    body.addEventListener('click', hid)
    function IsSeacrch() {
        if (inputSearch.classList.contains('unactive')) {
            inputSearch.classList.toggle('unactive');
            body.style.background = '#737272';
            inputSearch.focus()
        } else {
            inputSearch.classList.toggle('unactive');
            body.style.background = '#fff'
        }
    }
    function hid(e) {
        if(e.target != inputSearch && e.target != imgSearch){
            inputSearch.classList.toggle('unactive');
            body.style.background = '#fff'
        }
    }
}
search()
