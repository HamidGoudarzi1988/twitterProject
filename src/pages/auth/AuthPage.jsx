import { Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../api/api_auth';
import useStyle from './style';


const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2


const AuthPage = () => {
    const classes = useStyle()
    const [tab, setTab] = useState(LOGIN_TAB_VALUE)

    //login states
    const [usernameLogin, setUsernameLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()

    //Register states
    const [fullNameRegister, setFullNameRegister] = useState()
    const [usernameRegister, setUsernameRegister] = useState()
    const [passwordRegister, setPasswordRegister] = useState()
    const [confPasswordRegister, setConfPasswordRegister] = useState()

    const validateLogin = (user) => {
        if (!user.username)
            return ("The username is manditory")
        if (!user.password)
            return ("The password is manditory")
    }
    const validateRegister = (user) => {
        if (!user.username)
            return ("The username is manditory")
        if (!user.name)
            return ("The name is manditory")
        if (!user.password)
            return ("The password is manditory")
        if (user.password !== user.confPasswordRegister)
            return ("The password should be the same")
    }


    const handleRegister = () => {
        const user = {
            name: fullNameRegister,
            username: passwordRegister,
            password: passwordRegister,
            confPasswordRegister: confPasswordRegister,

        }
        const error = validateRegister(user);
        if (error)
            return alert(error)
        // return toast.warn(error)
        user.confPasswordRegister = undefined
        registerApi(user, (isOk, data) => {
            if (!isOk)
                return alert(data)
            // return toast.warn(data)
            alert('Success register')
            //toast.success("Successful login")
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload()
        })

    }

    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin,
        }
        const error = validateLogin(user)
        if (error)
            return alert(error)
        // return toast.warn(error)
        loginApi(user, (isOk, data) => {
            if (!isOk)
                return alert(data)
            // return toast.warn(data)
            alert('Success login')
            //toast.success("Successful login")
            localStorage.setItem("name", data.name);
            localStorage.setItem("image", data.image);
            localStorage.setItem("username", data.username);
            localStorage.setItem("x-auth-token", data["x-auth-token"]);
            window.location.reload()
        })

    }

    const handleChangeTab = (e, newValue) => {
        setTab(newValue)

    }
    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerTab}>Welcome tou our Twitter</Typography>
            <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChangeTab}
                aria-label="disabled tabs example"
            >
                <Tab label="Login" value={LOGIN_TAB_VALUE} className={classes.tab}
                />
                <Tab label="Register" value={REG_TAB_VALUE} className={classes.tab}
                />
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography  >User Name</Typography>
                    <input className={'uni_m_b_small'}
                        value={usernameLogin}
                        onChange={e => setUsernameLogin(e.target.value)}
                    ></input>
                    <Typography >Password</Typography>
                    <input className={'uni_m_b_small'}
                        value={passwordLogin}
                        onChange={e => setPasswordLogin(e.target.value)}
                    ></input>
                    <Button variant={'contained'} color={'primary'}
                        onClick={handleLogin}
                    >Enter</Button>

                </div>
            }
            {
                tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>Full Name</Typography>
                    <input
                        className={'uni_m_b_small'}
                        value={fullNameRegister}
                        onChange={e => setFullNameRegister(e.target.value)}

                    >

                    </input>
                    <Typography>User Name</Typography>
                    <input
                        className={'uni_m_b_small'}
                        value={usernameRegister}
                        onChange={e => setUsernameRegister(e.target.value)}
                    >

                    </input>
                    <Typography>Password</Typography>
                    <input
                        className={'uni_m_b_small'}
                        value={passwordRegister}
                        onChange={e => setPasswordRegister(e.target.value)}
                    >

                    </input>
                    <Typography>Repeat Password</Typography>
                    <input
                        className={'uni_m_b_small'}
                        value={confPasswordRegister}
                        onChange={e => setConfPasswordRegister(e.target.value)}
                    >
                    </input>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onClick={handleRegister}
                    >Register</Button>
                </div>
            }
        </Paper>
    );
}

export default AuthPage;