const { makeStyles } = require('@material-ui/core');

const useStyle = makeStyles({
  root: {
    overflow: 'hidden',
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  mainPart: {
    backgroundColor: '#white',
    flex: 1,
  },
  devider: {
    height: '100vh',
    width: 1,
    backgroundColor: '#7EBAFF !important',
    filter: 'opacity(0.5)',
  },
  content: {
    flex: 1,
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#e6e6e6',
  },
  waitParent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh'

  }
});

export default useStyle;
