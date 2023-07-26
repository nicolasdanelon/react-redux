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
      const {tweetIndex, editContent} = action.payload;
      const updatedTweets = state.tweets.map((tweet, index) =>
        index === tweetIndex ?  tweet = editContent : tweet
      );
      return { ...state, tweets: updatedTweets };

    }

    case 'DELETE_TWEET':{
      const tweetIndex = action.payload;
      const updatedTweets = state.tweets.filter((tweet, index) => index !== tweetIndex);
      return {
        ...state,
        tweets: updatedTweets
      };
    }
    default:
      return state;
  }
};

export default rootReducer


