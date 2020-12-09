import { CircularProgress, Divider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProfileRequest } from '../../api/api_auth';
import LeftSideBar from '../leftSideBar/LeftSideBar';
import RightSideBar from '../rightSideBar/RightSideBar';
import useStyle from './style';

const Layout = (props) => {
  const classes = useStyle();

  const history = useHistory()
  const [wait, setWait] = useState()

  useEffect(() => {
    getProfileRequest((isOk, data)=>{
      if(!isOk){
        alert(data)
        localStorage.clear()
        return history.push('/login')
      }
      setWait(false)
      localStorage.setItem("name", data.name);
      localStorage.setItem("image", data.image);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);


    })
  }, [])

  if(wait)
    return <div className={classes.waitParent}>
        <CircularProgress className={'uni_m_b_small'}/>
        <Typography>
        One moment please!
        </Typography>
    </div>
  return (
    <div className={classes.root}>
      <LeftSideBar />
      <Divider orientation={'vertical'} className={classes.devider} />
      <div className={classes.content}>
        {props.children}
      </div>
      <Divider orientation={'vertical'} className={classes.devider} />
      <RightSideBar />
    </div>
  );
};

export default Layout;
