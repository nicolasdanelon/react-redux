import { useState } from 'react';
import { connect } from 'react-redux';
import { addTweet, deleteTweet, editTweet } from './actions';
// eslint-disable-next-line
const Tweets = ({ tweets, addTweet, deleteTweet, editTweet }) => {
  const [tweetContent, setTweetContent] = useState('');

  const TweetFeed = () => (
    
    <>
      <h2>Tweets:</h2>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index} >
          <input value={tweet} onChange={(e) => setTweetContent(e.target.value)}/>
          <button onClick={() => handleEditTweet(index)}>edit
          </button>
          </li> 
        ))}
      </ul>
    </>
  )
  
// let contTweet;
//   if (tweetContent) {
//     contTweet = (
//       <>
//       <input
//       value={tweets.tweet}
//       onChange={(e) =>{
//         onChange({
//           ...tweets,
//           tweet: e.target.value,
//         })
//       }}
//       />
//       <button onClick={() => setTweetContent(false)}>Save</button>
//       </>
//     )
//   } else {
//     contTweet = (
//       <>
//         {tweets.text}
//         <button onClick={() => setTweetContent(true)}>Edit</button>
//       </>
//     )
//   }
 


  const handleAddTweet = (e) => {
    e.preventDefault();
    if (tweetContent.trim() !== '') {
      addTweet(tweetContent);
      setTweetContent('');
    }
  };

  

  const handleEditTweet = (id) =>{
    if (tweetContent.trim() !== '') {
      editTweet(tweetContent, id);
      setTweetContent('');
    }
  }

  
  
  
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
    editTweet: (tweet) => dispatch(editTweet(tweet)),
    deleteTweet: (tweet) => dispatch(deleteTweet(tweet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
