'use strict';

export function createPostElement(postData) {
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

export function createCommentElement(commentData) {
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

export function createSuccessfulMessage(message) {
  const messageElement = document.createElement('p');
  messageElement.classList.add('successful-message');
  
  messageElement.innerHTML = `${message}`;
  
  return messageElement;
}