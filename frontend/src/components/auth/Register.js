import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // const errors = { ...this.state.errors }, [e.target.name]: '' }
    this.setState({ data 
      //, errors 
    })
  }

  handleSubmit(e) {
    console.log('reaching handle submit')
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      // .then(res => console.log(res.data))
      .then(() => this.props.history.push('/login'))
      // .catch(err => console.log(err))
      .catch(err => this.setState({ errors: err.response.data }))
  // console.log('submitted', this.state.data)
  }

  render() {
    console.log('rendered', this.state)
    return (
      <div className="register-page">
        <section className="section">
          {/* <section className="hero is-fullheight-with-navbar">
            <div className="hero-body"> */}
          <div className="container">

            <form onSubmit={this.handleSubmit}>

              <h2 className="title">Register Form</h2>

              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username} ? : 'is-danger' : '' `}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.errors.email} ? : 'is-danger' : '' `}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.errors.password} ? : 'is-danger' : '' `}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
              </div>

              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.errors.passwordConfirmation} ? : 'is-danger' : '' `}
                    name="password_confirmation"
                    type="password"
                    placeholder="Password Confirmation"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password_confirmation && <small className="help is-danger">{this.state.errors.password_confirmation}</small>}
              </div>

              <button type="submit" className="button is-info is-fullwidth">Register</button>

            </form>


          </div>
          {/* </div>
          </section> */}
        </section>
      </div>
    )
  } 
}

export default Register
