// Makes a PUT fetch call to edit a post
const editPost = async (event) => {
	event.preventDefault();

	const title = $('#postTitle').val();
	const content = $('#postContent').val();
	const post_id = $('#post').data('postid');

	if (title && content) {
		const response = await fetch('/api/post', {
			method: 'PUT',
			body: JSON.stringify({title, content, post_id}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			document.location.replace(`/post/${post_id}`);
		} else {
			alert(response.statusText);
		}
	}
};

// Makes a DELETE fetch call to delete a post
const deletePost = async (event) => {
	event.preventDefault();

	const post_id = $('#post').data('postid'); 

	const response = await fetch('/api/post', {
		method: 'DELETE',
		body: JSON.stringify({post_id}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
};

$('#editPostBtn').click(editPost);
$('#deletePostBtn').click(deletePost);