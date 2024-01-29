const form = document.querySelector('.contact-form')
const submitBtn = document.getElementById('submit-btn')
const currentJobTimmer = document.getElementById('current-job-timmer')

var name2 = document.getElementById('name2')
var company2 = document.getElementById('company2')
var email2 = document.getElementById('email2')
var message2 = document.getElementById('message2')


window.addEventListener('load', () => {
    // Set current job elapsed time
    currentJobTimmer.innerText = getElapsedTime()
})


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
})



// Get current job elapsed time
const getElapsedTime = () => {
    const startDate = new Date("2022-12-14")

    const diff = parseInt((new Date - startDate) / (1000 * 60 * 60 * 24))

    const years = parseInt(diff / 365)
    const months = parseInt((diff % 365) / 30)

    let elapsedYears 
    let elapsedMonths

    if (years === 0) {
        elapsedYears = ''
    } else if (years === 1) {
        elapsedYears = `${years} year`
    } else {
        elapsedYears = `${years} years`
    }

    if (months === 0) {
        elapsedMonths = ''
    } else if (months === 1) {
        elapsedMonths = `${months} month`
    } else {
        elapsedMonths = `${months} months`
    }

    const elapsedTime = `${elapsedYears} ${elapsedMonths}`

    return elapsedTime
}