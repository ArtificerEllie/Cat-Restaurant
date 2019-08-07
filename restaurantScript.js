
function clearErrors() {
	for (var loopCounter = 0;
	loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
		if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
				document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function validateItems() {
	clearErrors();
	var nameInput = document.forms["contactForm"]["nameInput"].value;
	var emailInput = document.forms["contactForm"]["emailInput"].value;
	var phoneNumberInput = document.forms["contactForm"]["phoneNumberInput"].value;
	
	
	if (nameInput != "" && emailInput != "" && phoneNumberInput != "") {
			alert("Thank you for your submission, we will contact you shortly.");
	} else {
		alert("Please fill out all required fields.");
	}
}