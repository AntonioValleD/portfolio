const form = document.querySelector('.contact-form');
const submitBtn = document.getElementById('submit-btn');

var name2 = document.getElementById('name2');
var company2 = document.getElementById('company2');
var email2 = document.getElementById('email2');
var message2 = document.getElementById('message2');


submitBtn.addEventListener('click', (event) => {
    name2.value = '';
    company2.value = '';
    email2.value = '';
    message2.value = '';

    let name = document.getElementById('name').value;
    let company = document.getElementById('company').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    name2.value = name;
    company2.value = company;
    email2.value = email;
    message2.value = message;

    form.submit();
});