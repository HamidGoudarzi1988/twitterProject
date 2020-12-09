const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
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
}));

export default useStyle;
