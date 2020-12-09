import React from 'react';
import Layout from './layout/layout';
import TweetByUser from '../pages/tweetsByUser/TweetByUser';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Page404 from '../pages/404/Page404';
import Home from '../pages/home/Home';
import TweetByHashtag from '../pages/tweetsByHashtag/TweetByHashtag';
import AuthPage from '../pages/auth/AuthPage';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-toastify/dist/ReactToastify.css';
import { TweetProvider } from '../context/TweetContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicRoute path='/login' component={AuthPage} />
          <PrivateRoute
            path={'/'}
            render={() => {
              return (
                <TweetProvider>

                  <Layout>
                    <Switch>
                      <Route exact path={'/'} component={Home} />
                      <Route
                        exact
                        path={'/hashtags/:hashtag'}
                        component={TweetByHashtag}
                      />
                      <Route
                        exact
                        path={'/users/:id/:name'}
                        component={TweetByUser}
                      />
                      <Route component={Page404}></Route>
                    </Switch>
                  </Layout>
                </TweetProvider>

              );
            }}
          />
        </Switch>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </>
  );
}

const isLogin = () => !!localStorage.getItem("x-auth-token")

const PublicRoute = ({ component, ...props }) => {
  return <Route {...props} render={(props) => {
    if (isLogin())
      return <Redirect to={'/'} />
    else {
      return React.createElement(component, props)
    }
  }} />
}

const PrivateRoute = ({ render, ...props }) => {
  return <Route {...props} render={(props) => {
    if (isLogin())
      return render(props)
    else return <Redirect to={'/login'} />
  }} />
}
export default App;
