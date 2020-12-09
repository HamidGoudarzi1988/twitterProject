import { Divider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import useStyle from '../home/style';
import TweetList from '../home/components/TweetList';
import PersonIcon from '@material-ui/icons/Person';
import { useEffect } from 'react';
import Axios from 'axios';
import { getTweetsByUserRequest } from '../../api/api_tweet';
import { useLocation } from 'react-router-dom';


const TweetByUser = (props) => {
  const classes = useStyle();
  const [tweets, setTweets] = useState([]);


  const location = useLocation()

  useEffect(() => {
    getTweetsByUserRequest(props.match.params.id, (isOk, data) => {
      if (!isOk)
        return alert('There is a provlem with fetchind Data')
      else setTweets(data)
    })
  }, [location]);

  return (
    <div className={classes.root}>
      <Header
        title={props.match.params.name}
        icon={<PersonIcon style={{ marginTop: '.15rem' }} />}
      />
      <Divider className={classes.divider} />
      {tweets.length === 0 &&
        <Typography style={{ backgroundColor:'#fcba03', padding:'2rem'}}>
        This user have been had no tweet.
      </Typography>
      }
      <TweetList data={tweets} />
    </div>
  );
};

export default TweetByUser;
