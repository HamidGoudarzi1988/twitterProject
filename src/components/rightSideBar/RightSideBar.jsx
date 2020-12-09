import React, { useEffect, useState } from 'react';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { getHashTags } from '../../api/api_tweet';
import { setHashTagList, useTweetDispatch, useTweetState } from '../../context/TweetContext';

const RightSideBar = () => {
  const classes = useStyle();
  // const [hashTags, setHashTags] = useState([]);
  const {hashTags} = useTweetState()
  const tweetDispatch = useTweetDispatch()

  useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk)
        return alert("A problem in rightSideBar happened")
      setHashTagList(tweetDispatch,data)
    })
  }, []);

  return (
    <div className={classes.root}>
      <Link to={'/'}>
        <Grid container direction={'row'} alignItems={'center'}>
          <Grid item>
            <img src='/images/logo.png' />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType} component='h1'>
              Twitter
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>
        Trending Hashtags
      </Typography>
      <Grid container direction={'column'} alignItems={'center'}>
        {hashTags.map((item) => (
          <ButtonBase className={classes.hashTagParent}>
            <Grid item container>
              <Link to={`/hashtags/${item.text}`}>
                <img src='/images/hashtag.png' />
                <Typography className={classes.hashTag}>{item.text}</Typography>
              </Link>
            </Grid>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSideBar;
