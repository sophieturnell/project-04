import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
    axios.delete(`/api/posts/${postId}`, {
      headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjJ9.vkchhx3eMgbeO7WiStVlvZYQjY_r1zInTM7YLwtqR54' }
    })
      .then(() => this.props.history.push('/posts'))
      .catch(err => console.log(err))
  }

  isOwner() {
    console.log('is owner', this.state)
    console.log(Auth.getPayload().sub, 'sub')
    console.log(this.state.post.owner.id, 'owner')
    return Auth.getPayload().sub === this.state.post.owner.id
  }

  render() {
    if (!this.state.post) return null
    const { post } = this.state
    console.log('post', post)
    return (
      <div className="posts-show-page">
        <section className="section">
          <div className="container">
            <h2 className="title has-text-grey-lighter">{post.attention_grabber}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={post.post_image} alt={post.team_name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4 has-text-grey-light">Location</h4>
                <p>{post.location_name}</p>
                <p>{post.address}</p>
                <hr />
                <h4 className="title is-4 has-text-grey-light">Date</h4>
                <p>{post.date}</p>
                <hr />
                <h4 className="title is-4 has-text-grey-light">Time</h4>
                <p>{post.time}</p>
                <hr />
                <h4 className="title is-4 has-text-grey-light">Position</h4>
                <p>{post.position}</p>
                <hr />
                <h4 className="title is-4 has-text-grey-light">Number of players needed</h4>
                <p>{post.number_of_players_needed}</p>
                <hr />
                {/* <a className="button is-link is-fullwidth" href="mailto:test@test.com" target="_blank" rel="noopener noreferrer" subject="Ringer avail" onClick="window.open('your WS URL');">Click to e-mail team_name</a> */}
                <a className="button is-link is-fullwidth" href={`mailto:${post.owner.email}`} target="_blank" rel="noopener noreferrer" subject="Ringer avail" onClick="window.open('your WS URL');">{`Click to contact the ${post.team_name}`}</a>

                <br></br>
                <Link to={'/posts/new'} className="button is-link">
                Add a Ringer Request
                </Link>
                <br></br>
                <br></br>
                {/* Show buttons if allowed to edit or delete */}
                
                  
                {this.isOwner() &&
                  <>
                    
                      <Link to={`/posts/${post.id}/edit`} className="button is-link">
                      Edit Post
                      </Link>
                  <br></br>
                    <br></br>
                    
                      <button onClick={this.handleDelete} className="button is-danger is fullwidth">Permanently Delete Post</button>
                    
                  </>
                }
                

              </div>
            </div>
          </div>
        </section>

        {/* COMMENTS SECTION */}
        <section className="section">
          <div className="container">

            <hr />
            <h4 className="title is-4 has-text-grey-light">Comments</h4>
            <p>{post.comments.name}</p>
            <hr />



            {/* COMMENTS ELEMENT */}
            {/* first comment */}
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>

              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Barbara Middleton</strong>
                    <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                    <br></br>
                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                  </p>
                </div>

                {/* second comment-nested */}
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" />
                    </p>
                  </figure>

                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Sean Brown</strong>
                        <br></br>
                      Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                        <br></br>
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>
                  </div>
                </article>

                {/* third comment-nested */}
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" />
                    </p>
                  </figure>

                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>Kayli Eunice </strong>
                        <br></br>
                      Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                        <br></br>
                        <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                      </p>
                    </div>
                  </div>
                </article>

                {/* new comment */}
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea" placeholder="Add a comment..."></textarea>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button">Post comment</button>
                  </p>
                </div>
              </div>
            </article>

          </div>
        </section>
      </div>
    )
  }
}

export default PostShow