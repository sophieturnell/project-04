import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.state = { 
      navOpen: false,
      user: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  // checked which user to permission just the owner to do something in future
  checkUser() {
    if (Auth.isAuthenticated()) {
      this.setState({ user: true })
    }
  }

  handleLogout() {
    Auth.logout()
    this.setState({ user: false })
    console.log(this.props)
    this.props.history.push('/')
  }

  componentDidMount() {
    console.log(this.props)
    Auth.isAuthenticated() && this.checkUser()
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
      Auth.isAuthenticated() && this.checkUser()
    }

  }


  render() {
    return (

      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Ringers</Link>

            <a
              className={`navbar-burger ${this.state.navOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${this.state.navOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/posts">All Posts</Link>
              {console.log(Auth.isAuthenticated())}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {Auth.isAuthenticated() && <Link className="navbar-item" to="/posts/new">Post for a Ringer</Link>}
              {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
              {/* would use Auth.isOwner() for specific user instead of Auth.isAuthenticated - check */}
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default withRouter(Navbar)