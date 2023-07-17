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

    case 'EDIT_TWEET': {
      const data = action.payload;
      const updatedTweets = state.tweets.filter(tweet => tweet.id !== data.tweet.id);
      return {
        ...state,
        tweets: [...state.tweets, updatedTweets]
      }
    }


    default:
      return state;
  }
};

export default rootReducer;
