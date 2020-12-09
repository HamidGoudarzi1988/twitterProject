const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: '##e6e6e6',

  },
  header: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex',
  },
  headerTitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginLeft: '0.2rem',
  },
  headerIcon: {
    marginTop: '.2rem',
  },
  devider: {
    backgroundColor: '#7EBAFF',
    filter: 'opacity(0.18)',
  },
  input: {
    border: 'none',
    flex: 1,
    marginLeft: '1rem',
    '&:focus': {
      outline: 'unset',
    },
  },

  newTweet: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  tweetItem: {
    padding: 18,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem',
  },
  tweetItemName: {
    fontWeight: 600,
  },
  tweetItemId: {
    fontSize: '0.9rem',
    color: theme.palette.text.hint,
    marginLeft: '0.3rem',
    paddingTop: '0.1rem',
  },
  newTweetBtn: {
    color: 'white !important',
    borderRadius: '1rem !important',
    minHeight: '30px !important',
    height: '30px !important',
    lineHeight: '1rem !important',
    minWidth: '5rem !important',
    marginRight: '.8rem',
  },

  newTweetImageBtn: {
    border: '0.5px solid #3337',
    padding: '.2rem !important',
    borderRadius: '50%',
    marginRight: '1rem',
  },
  tweetText: {
    fontSize: '0.9rem',
    marginTop: '0.75rem',
    marginRight: '1rem',
  },
  likeCount: {
    marginRight: '0.3rem',
    fontSize: '0.8rem',
    color: theme.palette.text.hint,
  },
  tweetImg: {
    width: '100%',
    height: '10rem',
    marginTop: '1rem',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',


  }
}));

export default useStyle;
