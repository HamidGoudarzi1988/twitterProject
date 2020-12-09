import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import Header from '../../components/header/Header';
import TweetList from '../home/components/TweetList';
import useStyle from '../home/style';
import NewTweet from '../home/components/NewTweet';
import { useEffect } from 'react';
import axios from 'axios';
import { getTweetsByHashTagRequest } from '../../api/api_tweet';
import {setTweetList, useTweetDispatch, useTweetState} from '../../context/TweetContext'
import { useLocation } from 'react-router-dom';

const TweetByHashtag = (props) => {
  const classes = useStyle();


  const location = useLocation()

  // const [tweets, setTweets] = useState([])
  const {tweetList} = useTweetState()
  const tweetDispatch = useTweetDispatch()

  useEffect(() => {
    getTweetsByHashTagRequest(props.match.params.hashtag,(isOk, data) => {
      if (!isOk)
        return (alert(data))
      setTweetList(tweetDispatch,data)
    })
  }, [location]);

  return (
    <div className={classes.root}>
      <Header

        title={props.match.params.hashtag}
        icon={<img src='/images/hashtag.png' />}
      />
      <Divider className={classes.divider} />
      <TweetList data={tweetList} />
    </div>
  );
};
                                                                                                                                                                   
export default TweetByHashtag;
