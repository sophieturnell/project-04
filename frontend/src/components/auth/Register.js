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
        passwordConfirmation: ''
      },
      errors: {}
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange(e) {
  //   const data = { ...this.state.data, [e.target.name]: e.target.value }
  //   const errors = { ...this.state.name }, [e.target.name]: '' }
  //   this.setState({ data, errors })
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('http://localhost:4000/register', this.state.data)
  //     .then(() => this.props.history.push('/login'))
  //     .catch(err => this.setState({ errors: err.response.data.errors }))
  // }

  render() {
    console.log(this.state)
    return (
      <>
        <h1>Register page showing</h1>

        <form 
        // onSubmit={this.handleSubmit}
        >
          <h2>Register Form</h2>
          <div>Enter Username</div>
          <input
            // classname={`input ${this.state.errors.username}`}
            name="Username"
            placeholder="Username"
            // onChange={this.handleChange}
          />
        </form>
      </>
    )
  } 
}

export default Register