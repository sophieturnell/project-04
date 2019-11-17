import React from 'react'
import ReactDOM from 'react-dom'  //for web rather than mobile
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import PostsIndex from './components/posts/PostsIndex'
import PostShow from './components/posts/PostsShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <BrowserRouter>
    <>
    <Navbar />
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route path="/posts/:id" component={PostShow} />
      <Route path="/posts" component={PostsIndex} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)