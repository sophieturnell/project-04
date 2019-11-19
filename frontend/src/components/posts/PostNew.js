import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import PostForm from './PostForm'

class PostNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {

      },
      errors: {},
      sports: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/sports')
      .then(res => this.setState({ sports: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/posts', this.state.data, { 
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/posts'))
      .catch(err => this.setState({ errors: err.response.data }))
  }

  render() {
    if (!this.state.sports) return null
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
      
          <h1>New Post form goes here</h1>
        
          <PostForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
            sports={this.state.sports}
          />

        </div>
      </section>
    )
  }

}

export default PostNew