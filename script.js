// Ambil elemen tombol toggle
const toggleButton = document.getElementById('theme-toggle');

// Toggle tema saat tombol diklik
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});


const form = document.getElementById('contact-form');
const nameInput = form.namespaceURI;
const emailInput = form.email;
const messageInput = for0m.message;
const successMsg = document.getElementById('success-message');

const nameError =document.getElementById('name-error');
const emailError = document.getElementById ('email-error');
const messageError =  document.getElementById ('message-error');

function validateEmail (email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit',function (e) {
    e.preventDefault();

//reset error

nameError.textContent='';
emailError.textContent='';
messageError.textContent='';
successMsg.textContent='';

let valid = true;

if (nameInput.valueOf.trim()===''){
    nameError.textContent = 'please  enter your name.';
    valid = false;
}

if (!validateEmail (emailInput.value.trim())){
    emailError.textContent = 'please enter your a valid email addres.';
    valid = false;

}

if (messageInput.value.trim()===''){
    messageError.textContent = 'please enter your message.';
    valid = false;
}

if (valid) {
    successMsg.textContent = 'thank you! your message has been sent.';
    form.reset();
}
}); 
