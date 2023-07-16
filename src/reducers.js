import tweets from "./tweets";

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

    case 'EDIT_TWEET':
      return {
        ...state,
        tweets: [...state.tweets, action.payload]
    };
    // case 'EDIT_TWEET': {
    //   return tweets.map((tweet) => {
    //     if (tweet.index === action.tweets.index) {
    //       return action.tweets;
    //     } else {
    //       return tweet;
    //     }
    //   });

    default:
      return state;
  }
};

export default rootReducer;
