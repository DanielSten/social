const buttonRegistration =  document.querySelector(".block_button_registarion");
const buttonAuthorization = document.querySelector(".block_button_authorization");


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

if (buttonAuthorization) {
    const openAuthorization = document.querySelector(".block_emergence_authorization");
    const closeAuthorization = document.getElementById("closeAuthorization");
    buttonAuthorization.addEventListener("click", function() {
        openAuthorization.classList.toggle("active");
    })
    closeAuthorization.addEventListener("click", function() {
        openAuthorization.classList.toggle("active");
    })

}


