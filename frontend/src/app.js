import React from 'react'
import ReactDOM from 'react-dom'  //for web rather than mobile
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './styles/style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
// import SecureRoute from './components/common/SecureRoute'
import PostsIndex from './components/posts/PostsIndex'
import PostShow from './components/posts/PostsShow'
import PostNew from './components/posts/PostNew'
import PostEdit from './components/posts/PostEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => (
  <main>
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/posts/:id/edit" component={PostEdit} />
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id" component={PostShow} />
        <Route path="/posts" component={PostsIndex} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </main>
 
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)