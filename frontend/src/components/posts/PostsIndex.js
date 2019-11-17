import React from 'react'
import axios from 'axios'
import PostCard from './PostCard'

class PostsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    console.log('has mounted')
    axios.get('http://localhost:8000/api')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
    console.log(this.state)
  }

  render() {
    console.log('has rendered')
    if (!this.state.posts) return null
    return (
      <>
      <h1>Index Page here</h1>
      <div>
        {this.state.posts.map(post => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      </>
    )
  }

}

export default PostsIndex