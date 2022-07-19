const buttonRegistration =  document.querySelector(".block_button_registarion");
const buttonAuthorization = document.querySelector(".block_button_authorization");
const buttonAdded = document.getElementById('buttonAdded');
const buttonDelete = document.getElementById('buttonDelete');


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

if (uploadFile) {
    uploadFile.addEventListener('change', function(){
        if(this.value) {
            buttonAdded.classList.toggle('hidden');
            buttonDelete.classList.toggle('hidden');
        }
    });
}

buttonDelete.onclick = function() {
    if (uploadFile.value) {
        uploadFile.value=''
        buttonAdded.classList.toggle('hidden');
        buttonDelete.classList.toggle('hidden');
        if(buttonAdded.classList.contains('hidden') == false ){
            document.getElementById('conclusionFile').innerText = '';
        }
    }
}

let showFile = function (input) {
    let file = input.files[0];
    let fileName = `${file.name}`;
    if(buttonAdded.classList.contains('hidden') == false){
        document.getElementById('conclusionFile').innerText = fileName;
    }
}


