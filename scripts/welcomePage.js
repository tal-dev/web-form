const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const userName = document.querySelector('.user-name')
const userEmail = document.querySelector('.user-email')
const userAddress = document.querySelector('.user-address')

console.log(params)

userName.innerHTML += params.name
userEmail.innerHTML += params.email
userAddress.innerHTML += params.address
