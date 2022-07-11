const buttonRegistration =  document.querySelector(".block_button_registarion");
const buttonAutorization = document.querySelector(".block_button_autorization");

if (buttonRegistration) {
    const openRegistration = document.querySelector(".block_emergence_registration");
    buttonRegistration.addEventListener("click", function() {
        openRegistration.classList.add("active");
    })
}

if (buttonAutorization) {
    const openAutorization = document.querySelector(".block_emergence_autorization");
    buttonAutorization.addEventListener("click", function() {
        openAutorization.classList.add("active");
    })
}