const form = document.getElementById('form');
form.addEventListener('submit', e => {
	e.preventDefault();
let firstName = document.getElementById('firstname').value
let lastName = document.getElementById('lastname').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value


    if (firstName === '') {
        adicionarErro('firstname', 'First Name is required');
    } else {
        removerErro('firstname');
    }

    if (lastName === '') {
        adicionarErro('lastname', 'Last Name is required')
    } else {
        removerErro('lastname')
    }

    if (email === '') {
        adicionarErro('email', 'Email is required')
    } else {
        removerErro('email')
    }

    if (password === '') {
        adicionarErro('password', 'Password is required')
    } else {
        removerErro('password')
    }
});

function adicionarErro(field, message) {
    const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removerErro(field) {
    const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}