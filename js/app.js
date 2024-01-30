const submitBtn = document.getElementById('submit-btn')
const currentJobTimmer = document.getElementById('current-job-timmer')

// Get form data
const userName = document.getElementById('name')
const company = document.getElementById('company')
const email = document.getElementById('email')
const message = document.getElementById('message')

// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


window.addEventListener('load', () => {
    // Set current job elapsed time
    currentJobTimmer.innerText = getElapsedTime()
})



submitBtn.addEventListener('click', async (event) => {
    event.preventDefault()

    // Validate form fields
    if (userName.value == ""){
        alert("Please enter your name")
        userName.focus()
        return
    } else if (email.value == ""){
        alert("Please enter your email")
        email.focus()
        return
    } else if (!emailRegex.test(email.value)){
        alert("Please enter a valid email")
        email.focus()
        return
    } else if (message.value == ""){
        alert("Please enter your message")
        message.focus()
        return
    }

    // Send email
    await fetch('https://email-sender-api.fly.dev/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: userName.value, 
            company: company.value, 
            email: email.value, 
            message: message.value
        })
    })
    
    alert("Message sent successfully!")

    // Clean form fields
    userName.value = ""
    company.value = ""
    email.value = ""
    message.value = ""
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