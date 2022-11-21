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
}
const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    if (username && password) {
        if (username.length < 3) {
            alert('Username must be at least 3 characters long.');
            return;
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response)

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

$('#logInBtn').click(loginFormHandler)

$('#signUpBtn').click(signupFormHandler)