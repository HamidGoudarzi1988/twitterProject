import { Divider } from '@material-ui/core';
import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import NewTweet from './components/NewTweet';
import TweetList from './components/TweetList';
import useStyle from './style';
import HomeIcon from '@material-ui/icons/Home';
import { useState } from 'react';
import { getAllTweets } from '../../api/api_tweet';
import { useTweetState, setTweetList, useTweetDispatch } from '../../context/TweetContext';


const Home = () => {
  const classes = useStyle();

  // const [tweets, setTweets] = useState([])
  const tweetDispatch = useTweetDispatch()
  const { tweetList : tweets } = useTweetState()

  useEffect(() => {
    updateTweets()
  }, []);

  const updateTweets = () => {
    getAllTweets((isOk, data) => {
      if (!isOk)
        return (alert('A problem in homePage'))
      setTweetList(tweetDispatch, data)
    })
  }

  return (
    <div className={classes.root}>
      <Header
        title={'Home'}
        icon={<HomeIcon className={classes.headerIcon} />}
      />
      <Divider className={classes.divider} />
      <NewTweet updateTweets={updateTweets} />
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;
