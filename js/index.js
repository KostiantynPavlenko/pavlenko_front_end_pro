'use strict';
import { getPosts, getComments, addNewPost } from "./api.js"; 
import { createPostElement, createCommentElement, createSuccessfulMessage } from "./ui.js";

const mainContainer = document.querySelector('.container');
const postForm = document.querySelector('#post-form');
const postTitleInput = document.querySelector('#post-title-input');
const postTextarea = document.querySelector('#post-textarea');
const postsList = document.querySelector('.posts-list');

function renderPost(post, isNew = false) {
  const postElement = createPostElement(post);
  isNew ? postsList.prepend(postElement) : postsList.appendChild(postElement);
}

function showMessage(messageElement) {
  mainContainer.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

async function init() {
  try {
    const posts = await getPosts();

    posts.forEach(post => {
      renderPost(post);
    });
  } catch (err) {
    console.error(err);
  }
}

postsList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('load-comments-button')) {
    const post = e.target.parentElement;
    const postId = post.dataset.id;
    const commentWrapper = post.querySelector('.comments-wrapper');
    
    try {
      const comments = await getComments(postId);
      
      commentWrapper.innerHTML = '';
      comments.forEach(comment => {
        const commentElement = createCommentElement(comment);

        commentWrapper.appendChild(commentElement);
      });
    } catch (err) {
      console.error(err);
    }
  }
});

postForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const titleInputValue = postTitleInput.value.trim();
  const textareaValue = postTextarea.value.trim();

  if(titleInputValue || textareaValue) {
    try {
      const postData = await addNewPost(titleInputValue, textareaValue);

      renderPost(postData, true);
      showMessage(createSuccessfulMessage('Post successfully created'));
    } catch (err) {
      console.error(err);
    }
  } else {
    return;
  }
})

// Main
init();
