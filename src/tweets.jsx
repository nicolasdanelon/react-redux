import { useState } from 'react';
import { connect } from 'react-redux';
import { addTweet, deleteTweet, editTweet } from './actions';
// eslint-disable-next-line
const Tweets = ({ tweets, addTweet, deleteTweet, editTweet }) => {
  const [tweetContent, setTweetContent] = useState('');
  const [indexTweetEdit, setIndexTweetEdit] = useState(-1);
  const [tweetEdit, setTweetEdit] = useState('');

  const TweetFeed = () => (

    <>
      <h2>Tweets:</h2>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            {indexTweetEdit === index ? (
              <p><input onChange={(e) => setTweetEdit(e.target.value)} value={tweet} /></p>
            ) : (
              <p>{tweet}</p>
            )}
            <button onClick={() => handleDelete(index)}>Remove</button>
            <button onClick={() => handleEditTweet(index, tweet)}>Edit</button>
            <button onClick={() => handleOk()}>ok</button>
          </li>
        ))}
      </ul>
    </>
  )



  const handleAddTweet = (e) => {
    e.preventDefault();
    if (tweetContent.trim() !== '') {
      addTweet(tweetContent);
      setTweetContent('');
    }
  };


  const handleEditTweet = (tweetIndex) => {

    setIndexTweetEdit(tweetIndex);


  };

  const handleOk = () => {
    // editTweet(tweetIndex, updatedContent);
  };

  const handleDelete = (tweetIndex) => {
    deleteTweet(tweetIndex);
  };

  return (
    <div>
      <h1>Super Twitter</h1>
      <form>
        <input
          type="text"
          placeholder="Ingrese su tweet"
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
        />
        <button type='submit' onClick={(e) => handleAddTweet(e)}>Agregar tweet</button>
      </form>
      <div>
        {tweets.length > 0 ? <TweetFeed /> : <h2>No tweets yet</h2>}
      </div>
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
    editTweet: (tweetIndex, updatedContent) => dispatch(editTweet(tweetIndex, updatedContent)),
    deleteTweet: (tweet) => dispatch(deleteTweet(tweet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
