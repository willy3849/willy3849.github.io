const commentForm = document.querySelector('.comment-form');
const commentsList = document.querySelector('#comments');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#comment');

  const newComment = document.createElement('li');
  newComment.innerText = `${nameInput.value}: ${commentInput.value}`;

  commentsList.appendChild(newComment);

  nameInput.value = '';
  commentInput.value = '';
});
