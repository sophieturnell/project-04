import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    console.log(data)
    this.setState({ data, error: '' })
  }


  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      //sends data inthis.state to login
      // .then(res => console.log(res.data.token))
      .then(res => {
        Auth.setToken(res.data.token)
        // res.data.token is the token that is returned by the API, 
        //you then need to save this token to the local storage
        this.props.history.push('/posts')
        //redirects you to the index page of cheeses
      })
      .catch(() => this.setState({ error: 'Incorrect Credentials' }))
    //test something that shouldn't work first then one which should work
    console.log('submitted', this.state.data)
  }


  render() {
    return (
      <section className="section">
        <div className="container">

          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Login</h2>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${this.state.error} ? : 'is-danger' : '' `}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${this.state.error} ? : 'is-danger' : '' `}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && <small className="help is-danger">{this.state.error}</small>}
            </div>
            <button type="submit" className="button is-info is-fullwidth">Login</button>
            
          </form>
        </div>
      </section>
    )
  }

}

export default Login