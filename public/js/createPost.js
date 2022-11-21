// Mades a POST fetch call to create a post
const createPost = async (event) => {
	event.preventDefault();

	const title = $('#postTitle').val();
	const content = $('#postContent').val();

	if (title && content) {
		const response = await fetch('/api/post', {
			method: 'POST',
			body: JSON.stringify({title, content}),
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

$('#createPostBtn').click(createPost);