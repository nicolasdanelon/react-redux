export const addTweet = (tweet) => {
  return {
    type: 'ADD_TWEET',
    payload: tweet,
  };
};

export const editTweet = (tweetIndex, editContent) => {
  return {
    type: "EDIT_TWEET",
    payload: {
      tweetIndex,
      editContent
    }
  };
};

export const registerUser = (user) => {
  return {
    type: 'REGISTER_USER',
    payload: user
  };
};

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  };
};
export const deleteTweet = (tweetId) => {
  return {
    type: 'DELETE_TWEET',
    payload: tweetId
  };
};
