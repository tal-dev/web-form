function checkName() {
	var name = document.querySelector("#name");
	if (!/^[A-Za-z ]+$/.test(name.value)) {
		name.setCustomValidity("Please enter on alphabets only");
	} else {
		name.setCustomValidity("");
	}
}

function checkEmail() {
    var email = document.querySelector("#email")
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
        email.setCustomValidity("Invalid email address")
    }
    else {
        email.setCustomValidity("")
    }
}

function checkZipCode() {
    var zip = document.querySelector('#zip')
    if(!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value)) {
        zip.setCustomValidity("Invalid Zip Code")
    }
    else {
        zip.setCustomValidity("")
    }
}