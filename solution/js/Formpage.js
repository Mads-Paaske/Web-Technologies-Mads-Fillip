document.addEventListener("DOMContentLoaded", () => {

    radios= document.querySelectorAll('input[name="TypeOfListing"]')
    fullName=document.getElementById("privateUserField");
    shelterName=document.getElementById("petShelterField");
    email=document.getElementById("emailField");

    radios.forEach(radio =>{
        radio.addEventListener("change", () =>
            {
                if (radio.id === "TypePetShelter"){
                    shelterName.style.display = "block"
                    fullName.style.display = "none"
                    email.style.display = "block"
                }
                else if (radio.id === "TypeOtherUser"){
                    shelterName.style.display = "none"
                    fullName.style.display = "block"
                    email.style.display = "block"
                }
            }
        );
    });
})