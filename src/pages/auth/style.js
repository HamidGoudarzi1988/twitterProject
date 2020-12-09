const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    width: "30rem",
    margin: "10rem auto",
    display: "flex",
    flexDirection: "column",
  },
  headerTab: {
    alignSelf: 'center',
    margin: '1rem'
  },
  tab: {
    flex: 1,
    fontFamily: '"Oswald", sans-serif !important',
    
  },
  containerInput: {
    padding: '1rem 0.8rem',
    display: 'flex',
    flexDirection: 'column',
  }


}));

export default useStyle;
