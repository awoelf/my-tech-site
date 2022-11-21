const addComment = async (event) => {
    event.preventDefault();

    const content = $('#commentContent').val();
    const post_id = $('div').data('postid');

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        }) 

        if (!response.ok) {
            alert(response.statusText);
        }
    }

}

$('#addCommentBtn').click(addComment);