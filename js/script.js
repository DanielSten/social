const buttonRegistration =  document.querySelector(".block_button_registarion");
const buttonAuthorization = document.querySelector(".block_button_autorization");


if (buttonRegistration) {
    const openRegistration = document.querySelector(".block_emergence_registration");
    const closeRegistration = document.getElementById("closeRegistarion");
    buttonRegistration.addEventListener("click", function() {
        openRegistration.classList.add("active");
    })
    closeRegistration.addEventListener("click", function() {
        openRegistration.classList.toggle("active");
    })
}

if (buttonAutorization) {
    const openAuthorization = document.querySelector(".block_emergence_authorization");
    const closeAuthorization = document.getElementById("closeAuthorization");
    buttonAutorization.addEventListener("click", function() {
        openAutorization.classList.toggle("active");
    })
    closeAutorization.addEventListener("click", function() {
        openAuthorization.classList.toggle("active");
    })

}


