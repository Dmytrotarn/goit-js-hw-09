const formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input')
const submitBtn = document.querySelector('button')

const handleInput = (e) => {
    if (e.target == email) {
        formData.email = e.target.value.trim()
    }
    else { formData.message = e.target.value.trim() }

}

form.addEventListener('input', handleInput)

submitBtn.addEventListener('click', handleSubmit)

function handleSubmit(e) {
    console.log(formData);
}