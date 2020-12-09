import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from '../style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { likeTweet, seTweetText, useTweetDispatch } from '../../../context/TweetContext';
import { likeTweetRequest } from '../../../api/api_tweet';

const Tweet = ({data}) => {


  const tweetDispatch = useTweetDispatch()

  const retweetClick=()=>{

    seTweetText(tweetDispatch, data.text)

  }
 
  const renderTweetText = (text) => {
    return {
      __html: text.replace(
        /#\S+/g,
        "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>"
      ),
    };
  };

  const hanldeLike = ()=>{
    likeTweetRequest(data._id,(isOk,data)=>{
    if(!isOk) 
      return alert(data)
    likeTweet(tweetDispatch, data._id)
    })
  }

  const getImage = ()=>{
    if (data.user.image)
      return data.user.image
    return "/images/person.png"
    

  }

  const classes = useStyle();
  return (
    <div className={classes.tweetItem}>
      <Grid container>
        <img
          src={getImage()}
          style={{ height: '60px', width:'60px',
           marginLeft: '0.5rem', borderRadius:'50%' }}
        />
        <Grid
          item
          container
          direction={'column'}
          style={{ flex: 1, marginLeft: '1rem' }}
        >
          <Grid item container>
            <Typography className={classes.tweetItemName}>
              {data.user.name}
            </Typography>
            <Typography className={classes.tweetItemId}>
              {data.user.id}
            </Typography>
          </Grid>
          <Typography
            dangerouslySetInnerHTML={renderTweetText(data.text)}
            className={classes.tweetText}
            component={'p'}
          >
            {/* {
              data.user.image &&
              <div>
                <div style={{ backgroundImage: `url(${data.user.image})` }} className={classes.tweetImg} >

                </div>
              </div>
            } */}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction={'row-reverse'}
        style={{ marginTop: 16 }}
        alignItems={'center'}
      >
        <IconButton className={classes.newTweetIconBtn} onClick={retweetClick}>
          <img src='/images\retweet.png' />
        </IconButton>
        <IconButton className={classes.newTweetIconBtn} onClick={hanldeLike}>
          <FavoriteIcon/>

        </IconButton>
        <Typography className={classes.likeCount}>{data.likes}</Typography>
      </Grid>
    </div>
  );
};

export default Tweet;
