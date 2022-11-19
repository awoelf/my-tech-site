const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    if (username && password) {
        const response = await('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
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
}
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    if (username && password) {
        const response = await('/api/user', {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
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
}

$('#logInBtn').click(loginFormHandler)

$('#signUpBtn').click(signupFormHandler)