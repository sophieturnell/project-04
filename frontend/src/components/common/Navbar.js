import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  constructor() {
    super()

    this.state = { 
      navOpen: false 
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navOpen: !this.state.navOpen })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navOpen: false })
    }
  }


  render() {
    return (
      <>
      <h1>Navbar showing</h1>
        <nav className="navbar is-dark">
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
                <Link className="navbar-item" to="/posts">Posts Index</Link>
                {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
                {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
                {!Auth.isAuthenticated() && <Link className="navbar-item" to="/posts/new">Add a new Post</Link>}
                {!Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
              </div>
            </div>
          </div>
        </nav>

      </>
    )
  }
}

export default Navbar