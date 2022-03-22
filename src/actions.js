export const addPost = (post) => {
  return {
    type: "add",
    payload: post,
  };
};

export const deletePost = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};

export const initializePosts = (posts) => {
  return {
    type: "initializePosts",
    payload: posts,
  };
};

