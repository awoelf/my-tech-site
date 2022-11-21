// Makes a POST fetch call to add a comment
const addComment = async (event) => {
	event.preventDefault();

	const content = $('#commentContent').val();
	const post_id = $('#post').data('postid');

	if (content) {
		const response = await fetch('/api/comment', {
			method: 'POST',
			body: JSON.stringify({content, post_id}),
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

$('#addCommentBtn').click(addComment);