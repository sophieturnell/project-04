import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ attention_grabber,
  location_name,
  date,
  time,
  // sport_name,//changed to camel case
  _id }) => (
    <>
  <Link to={`/posts/${_id}`}>
    <h3>{attention_grabber}</h3>
    {/* <h4>{sport_name}</h4> */}
    <h4>{date} {time}</h4>
    <h4>{location_name}</h4>

  </Link>
  </>
)

export default PostCard