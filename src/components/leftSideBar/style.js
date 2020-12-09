const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
  root: {
    width: '25%',
    backgroundColor: 'white',
    padding: '1.5rem 2rem',
  },
  profText: {
    width: 'max-content',
    marginLeft: '0.5rem',
    
  },
  profName: {
    felx: 1,
    
  },
  profId: {
    felx: 1,
    color: theme.palette.text.hint,
    fontSize: '0.78rem',
    
  },
  twitterFame: {
    marginTop: '3rem',
    backgroundColor: '#f5f8fa',
    borderRadius: '2.5rem',
    padding: '11px 24px',




  },
  twitTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    marginBottom: '11px',

  },
  twitterNameParent: {
    marginRight: '0.5rem',
    width: 'max-content',
  },
  twitterParent: {
    padding: '10px 1rem',
  },
  twitterImg: {
    width: 50,
    height: 50,
    borderRadius: '50%',


  }
}));

export default useStyle;
