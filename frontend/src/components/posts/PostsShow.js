import React from 'react'
import axios from 'axios'

class PostShow extends React.Component {
  constructor() {
    super()

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    console.log('mounted')
    const postId = (this.props.match.params.id)
    axios.get(`api/posts/${postId}`)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.post) return null
    const { post } = this.state
    console.log('rendered')
    return (
      <>
      <h1>Show/Detail Page here</h1>
      <h2>{post.attention_grabber}</h2>
      <h3>{post.location_name}</h3>
      <h3>{post.address}</h3>
      <h3>{post.date}</h3>
      <h3>{post.time}</h3>
      <h3>{post.position}</h3>
      <h3>{post.number_of_players_needed}</h3>
      {/* <h3>{owner}</h3> */}
      </>
    )
  }
}

export default PostShow