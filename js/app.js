let heart = document.querySelector('.heart');
let authmodal = document.querySelector('.auth-modal');
let comeOut = document.querySelectorAll('.come-out');
let closeModal = document.querySelector('.auth-modal-close');
let loopaMd = document.querySelector('.loopa-md');
let headerSearch = document.querySelector('.header-search');
let headerSearchInput = document.querySelector('.header-search input');
let headerBlog = document.querySelector('.header-blog');
let headerLogo = document.querySelector('.header-logo');
let body = document.querySelector('body');
let catalogMenu = document.querySelectorAll('.catalog-menu li');
let catalogMenuLink = document.querySelectorAll('.catalog-menu li a');

if (catalogMenu) {
    for (let catalogMenuItem of catalogMenu) {
        catalogMenuItem.onclick = function () {
            console.log(this);
        }
    }
}

heart.addEventListener('click', () => {
    heart.classList.toggle('heart-active')
})
s = true
hs = true

if (headerSearch) {
    headerSearchInput.addEventListener('click', () => {
        if (hs) {
            loopaMd.classList.add('loopa-md-active');
            headerSearch.classList.add('header-search-active');
            headerBlog.classList.add('header-blog-avtive');
            headerLogo.classList.add('header-logo-active');
            hs = false;
            s = false;
        } else if (hs == false) {
            hs = true;
        }
    })
}

if (loopaMd) {
    loopaMd.addEventListener('click', () => {
        if (s) {
            loopaMd.classList.add('loopa-md-active');
            headerSearch.classList.add('header-search-active')
            s = false
        } else if (s == false) {
            loopaMd.classList.remove('loopa-md-active');
            headerSearch.classList.remove('header-search-active')
            headerBlog.classList.remove('header-blog-avtive');
            headerLogo.classList.remove('header-logo-active');
            s = true
        }

    });
}

if (comeOut) {
    for (Item of comeOut) {
        Item.addEventListener('click', () => {
            authmodal.classList.add('auth-modal-active');
            body.style.overflowY = "hidden"
        });
    }
    closeModal.addEventListener('click', () => {
        authmodal.classList.remove('auth-modal-active');
        body.style.overflowY = "visible"
    });
}


window.addEventListener('scroll',  () => {
    if(window.parseFloat > 50) {
       alert(4544)
    }
})