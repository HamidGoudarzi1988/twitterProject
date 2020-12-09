import { ButtonBase, Divider, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/api_tweet';
import { uploadUserPhoto } from '../../api/api_auth';

const TwitterUsers = ({ name, id, img }) => {
  const classes = useStyle();

  const getImage = () => {
    if (img)
      return img;
    return "/images/person.png"

  }
  return (
    <ButtonBase style={{ width: '100%' }} >

      <img src={getImage()} className={classes.twitterImg} />

      <Grid
        container
        direction={'row'}
        className={classes.twitterParent}
      >


        <Grid
          item
          container
          direction={'column'}
          alignItems={'flex-start'}
          className={classes.twitterNameParent}
        >
          <Typography className={classes.profName}>{name}</Typography>
          <Typography className={classes.profId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const LeftSideBar = () => {
  const classes = useStyle();
  const [twitterUsers, setTwitterUsers] = useState([]);
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  const [anchorMenu, setAnchoreMenu] = useState()
  const inputRef = useRef()

  useEffect(() => {
    getUsers((isOk, data) => {
      if (!isOk)
        return alert("A problem in leftSideBar happened")
      //retrun toast.error('bang')
      setTwitterUsers(data)
    })
  }, []);

  const handleToggleMenu = (e) => {
    if (anchorMenu)
      setAnchoreMenu(null)
    else
      setAnchoreMenu(e.currentTarget)
  }

  const getImage = () => {
    if (imagePath)
      return imagePath;
    if (localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image")
    return ("/images/user-profiles.png")

  }

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0])

      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePath(e.target.result)

      }
      reader.readAsDataURL(e.target.files[0])
      const formData = new FormData()
      formData.append("image", e.target.files[0])
      uploadUserPhoto(formData, (isOk, data) => {
        if (!isOk)
          return alert(data)
        //return toast.error(data)
        return alert('your imahe successfully uploaded')
        // return toas.success('successful')
        localStorage.setItem("image", data.imagePath)

      })
    }
  }

  return (
    <div className={classes.root} direction={'row-reverse'} onClick={handleToggleMenu} style={{ cursor: 'pointer' }}>
      <Grid container direction={'row'} className={classes.twitterParent}>
        <img src={getImage()} style={{ width: 50, height: 50, borderRadius: '50%' }} />
        <Grid item container direction={'column'} className={classes.profText}>
          <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
          <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
        </Grid>
        <input ref={inputRef} type={'file'} style={{ display: 'none' }} onChange={handleAvatarChange} />
      </Grid>

      <Grid
        item
        container
        direction={'column'}
        className={classes.twitterFame}
      >
        <Typography className={classes.twitTitle}>
          You may be interested in
          </Typography>
        <Divider style={{ marginLeft: -24, marginRight: -24 }} />
        {twitterUsers.map((item, index) => {
          return (
            <Link to={`/users/${item._id}/${item.name}`} >
              <TwitterUsers name={item.name} id={item.username} img={item.image} />
              {index !== twitterUsers.length - 1 && (
                <Divider style={{ marginLeft: -24, marginRight: -24 }} />
              )}
            </Link>
          );
        })}
      </Grid>
      <Menu
        open={Boolean(anchorMenu)}
        onClose={() => setAnchoreMenu(null)}
        anchorEl={anchorMenu}
      >
        <MenuItem
          onClick={() => {
            localStorage.clear();
            window.location.reload()
          }}>Exit</MenuItem>
        <MenuItem
          onClick={() => {
            inputRef.current.click()
          }}
        >Edit profile image</MenuItem>
      </Menu>
    </div >
  );
};

export default LeftSideBar;
