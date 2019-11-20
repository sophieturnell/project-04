/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

//posts come from the map on index page - below are the keys from the posts
const PostCard = ({ attention_grabber, location_name, date, time, post_image, sport_name,
  id }) => (
    
    <>

<div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
  <Link to={`/posts/${id}`}>
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{attention_grabber}</h4>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={post_image} alt={attention_grabber} />
        </figure>
        <div className="card-content">
          <h5 className="title is-6">{sport_name.sport_name}</h5>
          <h5 className="title is-6">{date}</h5>
          <h5 className="title is-6">{time}</h5>
          <h6 className="subtitle is-6">{location_name}</h6>
        </div>
      </div>
    </div>
  </Link>
</div>

  </>
)

export default PostCard