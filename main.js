'use strict';
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
const USER_ID = 1;

const mainContainer = document.querySelector('.container');
const postForm = document.querySelector('#post-form');
const postTitleInput = document.querySelector('#post-title-input');
const postTextarea = document.querySelector('#post-textarea');
const postsList = document.querySelector('.posts-list');

function createPostElement(postData) {
  const post = document.createElement('div');

  post.setAttribute('data-id', postData.id);
  post.innerHTML = `
    <h3 class="post-title">${postData.title}</h3>
    <p class="post-content">${postData.body}</p>
    <button class="load-comments-button">Load comments</button>
    <div class="comments-wrapper"></div>
  `;

  return post;
}

function createCommentElement(commentData) {
  const comment = document.createElement('div');

  comment.classList.add('comment-container')
  comment.setAttribute('data-id', commentData.id);
  comment.innerHTML = `
    <p class="comment-person-name">Name: ${commentData.name}</p>
    <p class="comment-person-email">Email: ${commentData.email}</p>
    <p class="comment-content">${commentData.body}</p>
  `;

  return comment;
}

function renderPost(post, isNew = false) {
  const postElement = createPostElement(post);
  isNew ? postsList.prepend(postElement) : postsList.appendChild(postElement);
}

function createSuccessfulMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.classList.add('successful-message');
  
  messageElement.innerHTML = `${message}`;
  
  return messageElement;
}

function showMessage(messageElement) {
  mainContainer.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function getPosts() {
  return fetch(`${POSTS_API_URL}?_limit=10`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
    })
}

function getComments(postId) {
  return fetch(`${POSTS_API_URL}/${postId}/comments?_limit=2`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err);
    })
}

function addNewPost(title, body) {
  return fetch(POSTS_API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      'title': title,
      'body': body,
      'userId': USER_ID
    })
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to add new post: ${response.statusText}`)
    }
    return response.json();
  }).catch(err => {
    console.error(err);
  });
}

postsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('load-comments-button')) {
    const post = e.target.parentElement;
    const postId = post.dataset.id;
    const commentWrapper = post.querySelector('.comments-wrapper');

    getComments(postId)
      .then(comments => {
        commentWrapper.innerHTML = '';

        comments.forEach(comment => {
          const commentElement = createCommentElement(comment);
          commentWrapper.appendChild(commentElement);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
});

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInputValue = postTitleInput.value.trim();
  const textareaValue = postTextarea.value.trim();

  if(titleInputValue || textareaValue) {
    addNewPost(titleInputValue, textareaValue)
    .then(data => {
      renderPost(data, true);
      showMessage(createSuccessfulMessage('Post successfully created'));
    })
    .catch(err => {
      console.error(err);
    });
  } else {
    return;
  }
})

// Main

getPosts().then(posts => {
  posts.forEach(post => {
    renderPost(post);
  })
}).catch(err => {
  console.error(err);
});