// Obtain the query string (form data)
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Select elements
const userName = document.querySelector('.user-name')
const userEmail = document.querySelector('.user-email')
const userAddress = document.querySelector('.user-address')

// Set inner text to the elements
userName.innerText += params.name
userEmail.innerText += params.email
userAddress.innerText += params.address
