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
<<<<<<< HEAD
    case 'DELETE_TWEET': {
      const tweetIndex = action.payload;
      const updatedTweets = state.tweets.filter((tweet, index) => index !== tweetIndex);
      return {
        ...state,
        tweets: updatedTweets
      };
    }
    case 'EDIT_TWEET': {
      const tweetIndex = action.payload;
      const updatedTweets = state.tweets.map((tweet, index) =>
        index === tweetIndex ? { ...tweet } : tweet
      );
=======

    case 'EDIT_TWEET': {
      const data = action.payload;
      const updatedTweets = state.tweets.filter(tweet => tweet.id !== data.tweet.id);
      return {
        ...state,
        tweets: [...state.tweets, updatedTweets]
      }
    }

>>>>>>> d8c4305 (wip edit)

      return { ...state, tweets: updatedTweets };
    }
    default:
      return state;
  }
};

export default rootReducer
