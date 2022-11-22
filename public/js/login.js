// Log in handler
const loginFormHandler = async (event) => {
	event.preventDefault();

	const username = $('#username').val();
	const password = $('#password').val();

	if (username && password) {
		const response = await fetch('/api/user/login', {
			method: 'POST',
			body: JSON.stringify({username, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
};

// Sign up handler
const signupFormHandler = async (event) => {
	event.preventDefault();

	const username = $('#username').val();
	const password = $('#password').val();

	if (username && password) {
		const response = await fetch('/api/user', {
			method: 'POST',
			body: JSON.stringify({username, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log(response);

		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
	}
};

const checkValid = () => {
	let userValid = false;
	let passValid = false;

	if ($('#username').val().length >= 3) {
		userValid = true;
		$('#userValid').text('✔️');
	} else {
		userValid = false;
		$('#userValid').text('❌');
	}

	if ($('#password').val().length >= 8) {
		passValid = true;
		$('#passValid').text('✔️');
	} else {
		passValid = false;
		$('#passValid').text('❌');
	}

	if (userValid && passValid) {
		$('#signUpBtn, #logInBtn').removeAttr('disabled');
	} else {
		$('#signUpBtn, #logInBtn').attr('disabled', true);
	}
}

$('#logInBtn').click(loginFormHandler);
$('#signUpBtn').click(signupFormHandler);

// Checks if input is valid
checkValid();
document.querySelector('.input-group').addEventListener('input', checkValid);
