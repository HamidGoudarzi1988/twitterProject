const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
  root: {
    width: '18%',
    backgroundColor: '#white',
    padding: '1.5rem 1rem',
  },
  logoType: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginLeft: '0.5rem',
    color: theme.palette.primary.main,
  },
  hashTagTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '600 !important',
    marginTop: '3rem',
    marginBottom: '1.5rem',
    marginLeft: '0.5rem',
  },
  hashTagParent: {
    marginBottom: '0.5rem !important',
    padding: '0.15rem !important',
    width: '100%',
  },
  hashTag: {
    marginLeft: '0.8rem',
    marginTop: '0.25rem !important',
    float:'right',
    
  },
}));

export default useStyle;
