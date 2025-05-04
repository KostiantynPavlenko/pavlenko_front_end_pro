'use strict';
import { POSTS_API_URL, GET_POSTS, GET_COMMENTS, USER_ID } from "./config.js";

export async function getPosts() {
  try {
    const response = await fetch(`${POSTS_API_URL}${GET_POSTS}`);

    if (!response.ok) {
      throw new Error(`Failed to load posts: ${response.statusText}`)
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getComments(postId) {
  try {
    const response = await fetch(`${POSTS_API_URL}/${postId}${GET_COMMENTS}`);

    if (!response.ok) {
      throw new Error(`Failed to load comments: ${response.statusText}`)
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
}

export async function addNewPost(title, body) {
  try {
    const response = await fetch(POSTS_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        'title': title,
        'body': body,
        'userId': USER_ID
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to add new post: ${response.statusText}`)
    }

    return response.json();
  } catch (err) {
    console.error(err);
  }
}