import { useState } from 'react';
import { connect } from 'react-redux';
import { addTweet, deleteTweet } from './actions';

// eslint-disable-next-line
const Tweets = ({ tweets, addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');

  const TweetFeed = () => (
    <>
      <h2>Tweets:</h2>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet}</li>
        ))}
      </ul>
    </>
  )

  const handleAddTweet = () => {
    if (tweetContent.trim() !== '') {
      addTweet(tweetContent);
      setTweetContent('');
    }
  };

  return (
    <div>
      <h1>Super Twitter</h1>
      <div>
        <input
          type="text"
          placeholder="Ingrese su tweet"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
        <button onClick={handleAddTweet}>Agregar tweet</button>
      </div>
      <div>
        {tweets.length > 0 ? <TweetFeed /> : <h2>No tweets yet</h2>}
      </div>
    </div>
  );
};
const TweetsList = (props) => {
  const handleDelete = (tweet) => {
    props.deleteTweet(tweet);
  };

  return (
    <div>
      {props.tweets.map(tweet => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
          <button onClick={() => handleDelete(tweet.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    tweets: state.tweets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTweet: (tweet) => dispatch(addTweet(tweet)),
    deleteTweet: (tweet) => dispatch(deleteTweet(tweet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets, TweetsList);
