import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ attentionGrabber,//changed to camel case
  locationName,//changed to camel case
  date,
  time,
  sportName,//changed to camel case
  _id }) => (
    <>
  <Link to={`/posts/${_id}`}>
    <h3>{attentionGrabber}</h3>
    <h4>{sportName}</h4>
    <h4>{date} {time}</h4>
    <h4>{locationName}</h4>

  </Link>
  </>
)

export default PostCard