const navigation = document.querySelector('.navigation');
const headerButton = document.querySelector('.header__button');
const navigationButton = document.querySelector('.navigation__button')
const body = document.body;

headerButton.addEventListener("click", function () {
        navigation.classList.add("is-active");
        body.classList.add("is-nav-active")

});

navigationButton.addEventListener("click", function () {
        navigation.classList.remove("is-active");
        body.classList.remove("is-nav-active")

});
