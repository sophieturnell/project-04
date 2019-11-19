import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class PostShow extends React.Component {
  constructor() {
    super()

    this.state = {
      post: null
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    console.log('mounted')
    const postId = (this.props.match.params.id)
    axios.get(`/api/posts/${postId}/`, { headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjJ9.vkchhx3eMgbeO7WiStVlvZYQjY_r1zInTM7YLwtqR54' } })
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    const postId = this.props.match.params.id
    axios.delete(`/api/posts${postId}`, {
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjJ9.vkchhx3eMgbeO7WiStVlvZYQjY_r1zInTM7YLwtqR54' }
    })
      .then(() => this.props.history.push('/posts'))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.post.user.id
  }

  render() {
    if (!this.state.post) return null
    const { post } = this.state
    console.log('rendered')
    return (
      <>
      <h1>Show/Detail Page here</h1>

        <section className="section">
          <div className="container">
            <h2 className="title">{post.attention_grabber}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                {/* <figure className="image">
                  <img src={cheese.image} alt={cheese.name} />
                </figure> */}
              </div>
              <div className="column is-half">
                <h4 className="title is-4">Location</h4>
                <p>{post.location_name}</p>
                <p>{post.address}</p>
                <hr />
                <h4 className="title is-4">Date</h4>
                <p>{post.date}</p>
                <hr />
                <h4 className="title is-4">Time</h4>
                <p>{post.time}</p>
                <hr />
                <h4 className="title is-4">Position</h4>
                <p>{post.position}</p>
                <hr />
                <h4 className="title is-4">Number of players needed</h4>
                <p>{post.number_of_players_needed}</p>
                <hr />
                <h4 className="title is-4">Comments</h4>
                <p>{post.comments.name}</p>
                <hr />
                {/* {this.isOwner() &&
                  <>
                    <Link to={`/posts/${post.id}/edit`} className="button is-warning">
                      Edit Post
                    </Link>
                    <button onClick={this.handleDelete} className="button is-danger">Permanently Delete Post</button>
                  </>
                } */}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default PostShow