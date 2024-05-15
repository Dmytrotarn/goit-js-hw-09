let formData = {
	email: "",
	message: "",
}

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitBtn = form.querySelector('button[type="submit"]');

//  інпут
form.addEventListener('input', (event) => {
	const inputName = event.target.name
	formData[inputName] = event.target.value.trim()
	localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})


window.addEventListener('DOMContentLoaded', () => {
	const savedData = localStorage.getItem("feedback-form-state")


	if (savedData) {
		formData = JSON.parse(savedData);
		emailInput.value = formData.email;
		messageInput.value = formData.message;
	}

})


form.addEventListener('submit', (event) => {
	event.preventDefault()
	if (emailInput.value == '' || messageInput.value == '') {
		return console.log("Please fill all fields");
	}
	console.log(formData);

	emailInput.value = '';
	messageInput.value = '';
	localStorage.removeItem('feedback-form-state')

})

