const addComment = async (event) => {
    event.preventDefault();

    console.log(document);

    const content = $('#commentContent').val();

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({title, content}),
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