import { Button, Grid, IconButton } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from '../style';
import classnames from 'classnames';
import Axios from 'axios';
import { newTweetRequest } from '../../../api/api_tweet';
import { Folder, RedeemSharp } from '@material-ui/icons';
import { useTweetState, useTweetDispatch, updateHashTagList } from '../../../context/TweetContext'
import { seTweetText as setTweet} from '../../../context/TweetContext'


const NewTweet = ({ updateTweets }) => {

  const getImage = () => {

    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image")
    return '/images/person.png'

  }
  const classes = useStyle();
  // const [tweet, setTweet] = useState()
  const {tweetText: tweet} = useTweetState()
  const tweetDispatch = useTweetDispatch()

  const [imageFile, setImageFile] = useState()
  const [imagePath, setImagePath] = useState()
  // const input = useRef()
  const inputFile = useRef()

  // useEffect(() => {
  //   input.current.addEventListener('input', (e) => {
  //     console.log('inpu event fired', e.target.innerText)
  //   }, false)
  // }, [])

  const selectImg = () => {
    inputFile.current.click();
  }

  const onChangeImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])


      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result)
      }

      reader.readAsDataURL(e.target.files[0])

    }

  }


  const newTweetClick = () => {
    // const tweetText = input.current.innerText
    const tweetText = tweet
    if (!tweetText)
      return
    // const data = {

    //   "text": tweetText,

    // }
    const formData = new FormData();
    formData.append("text", tweetText);
    if (imageFile)
      formData.append("image", imageFile)

    newTweetRequest(formData, (isOk, data) => {
      if (!isOk)
        return (alert(data))
      alert("your request is posted")
      updateTweets();
      // input.current.innerText = "";
      setTweet(tweetDispatch, tweetText);
      setImagePath();
      setImageFile();
      if (tweetText.includes('#'))
        updateHashTagList(tweetDispatch)

    })
  }



  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img src={getImage()} style={{ width: 60, height: 60, borderRadius: '50%' }} />

        <input
          className={classnames(classes.input)}
          placeholder='Tweet here'
          value={tweet}
          onChange={e => setTweet(tweetDispatch,e.target.value)}
        />

        {/* <div
          contentEditable={'true'}
          className={classnames(classes.input, 'editable')}
          data-placeholder='Tweet here'
          ref={input}

        >

        </div> */}
        <input type={'file'} style={{ display: 'none' }} ref={inputFile} onChange={onChangeImg} />
      </Grid>
      {
        imagePath &&
        <div>
          <div style={{ backgroundImage: `url(${imagePath})` }} className={classes.tweetImg} >

          </div>
        </div>
      }
      <Grid container direction={'row-reverse'} style={{ marginTop: 16 }}>
        <Button
          variant={'contained'}
          color={'primary'}
          className={classes.newTweetBtn}
          onClick={newTweetClick}
        >
          Tweet
        </Button>
        <IconButton className={classes.newTweetImageBtn} onClick={selectImg} >
          <img src='images\image-black-18dp.png' />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTweet;
