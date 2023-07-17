const initialState = {
  user: null,
  tweets: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
      };
    case 'DELETE_TWEET':
      const tweet = action.payload;
      const updatedTweets = state.tweets.filter(tweet => tweet.id !== tweet);
      return {
        ...state,
        tweets: updatedTweets
      };
    default:
      return state;
  }
};

export default rootReducer
