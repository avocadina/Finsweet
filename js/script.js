// categories

const categoriesItem = document.querySelectorAll('.categories__item');

if (categoriesItem) {
    categoriesItem.forEach(item => {
        item.addEventListener('click', function() {
            item.classList.toggle('categories__item--active');
    })
    })
}

//filters & tags

const tagsItem = document.querySelectorAll('.tag');

if (tagsItem) {
    tagsItem.forEach(item => {
        item.addEventListener('click', function() {
            item.classList.toggle('tag--active');
    })
    })
}

// breakpoints
const postsList = document.querySelector('.posts__list');
const authorsList = document.querySelector('.authors__list');
const logoipsumContainer = document.querySelector('.logoipsum__container');

window.addEventListener('resize', function() {
    if (window.innerWidth <= 1280) { 
        if (!postsList.classList.contains('grid')) {
            postsList.classList.add('grid');
            postsList.classList.remove('posts__list');
        }   else if (postsList.classList.length <= 0) {
            postsList.classList.add('posts__list');
        }

        if (!authorsList.classList.contains('grid')) {
            authorsList.classList.add('grid');
            authorsList.classList.remove('authors__list');
        } else if (authorsList.classList.length <= 0) {
            authorsList.classList.add('authors__list');
        }

        if (!logoipsumContainer.classList.contains('grid')) {
            logoipsumContainer.classList.add('grid');
            logoipsumContainer.classList.remove('logoipsum__container');
        } else if (logoipsumContainer.classList.length <= 0) {
            logoipsumContainer.classList.add('logoipsum__container');
        }
    } else if (window.innerWidth > 1280) {
        if (!postsList.classList.contains('posts__list')) {
            postsList.classList.remove('grid');
            postsList.classList.add('posts__list');
        } else if (postsList.classList.length <= 0) {
            postsList.classList.add('posts__list');
        }

        if (!authorsList.classList.contains('authors__list')) {
            authorsList.classList.remove('grid');
            authorsList.classList.add('authors__list');
        } else if (authorsList.classList.length <= 0) {
            authorsList.classList.add('authors__list');
        }

        if (logoipsumContainer.classList.contains('grid')) {
            logoipsumContainer.classList.remove('grid');
            logoipsumContainer.classList.add('logoipsum__container');
        } else if (logoipsumContainer.classList.length <= 0) {
            logoipsumContainer.classList.add('logoipsum__container');
        }
    }
});

    //scroll

let oldScrollTopPosition = document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    let scrollTopPosition = document.documentElement.scrollTop;

    if (oldScrollTopPosition < scrollTopPosition) {
        this.document.querySelector('.header').classList.add('header--hidden');
        oldScrollTopPosition = scrollTopPosition;
    } else if (oldScrollTopPosition > scrollTopPosition) {
        this.document.querySelector('.header').classList.remove('header--hidden');
        oldScrollTopPosition = scrollTopPosition;
    }
})

// заглушка отправки формы

const form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
})

// burger menu

const burgerEl = document.querySelector('.burger');

if (burgerEl) {
    const body = document.body;
    const menuEl = document.querySelector('.nav');
    burgerEl.addEventListener('click', () => {
        menuEl.classList.toggle('nav--active');
        burgerEl.classList.toggle('burger--active');
        body.classList.toggle('stop-scroll');
    });

};

// input

$('select#query').on('change', function() {
    $('input[name="query"]').val(this.value);
});