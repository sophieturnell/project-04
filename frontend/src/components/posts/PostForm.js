import React from 'react'
// import ReactDOM from 'react-dom'
// import Select from 'react-select'
// import makeAnimated from 'react-select/animated'

// const animatedComponents = makeAnimated()

const PostForm = ({ data, handleChange, handleSubmit, errors, sports }) => (

  <div className="post-form">
    
    <section className="section">
      <div className="container">


        <form onSubmit={handleSubmit}>
          

          <div className="field">
            <label className="label has-text-grey-light">Name of Post:</label>
            <div className="control">
              <input
                className={`input ${errors.attention_grabber ? 'is-danger' : ''}`}
                placeholder="e.g. Nippy Netballer Needed"
                name="attention_grabber"
                onChange={handleChange}
                value={data.attention_grabber || ''}
              />
            </div>
            {errors.attention_grabber && <small className="help is-danger">{errors.attention_grabber}</small>}
          </div>

          <div className="field">
            <label className="label has-text-grey-light">Sport Name:</label>
            <div className="control select" >
              <select onChange={handleChange} name="sport_name" value={data.sport_name || ''}>
                <option disabled value="">Pick a Sport</option>
                {sports.map(sport => (
                  <option key={sport.id} value={sport.id}>{sport.sport_name}</option>
                ))}
              </select>
            </div>
            {errors.sport_name && <small className="help is-danger">{errors.sport_name}</small>}
          </div>


          <div className="field">
            <label className="label has-text-grey-light">Location Name:</label>
            <div className="control">
              <input
                className={`input ${errors.location_name ? 'is-danger' : ''}`}
                placeholder="e.g. Clapham Common"
                name="location_name"
                onChange={handleChange}
                value={data.location_name || ''}
              />
            </div>
            {errors.location_name && <small className="help is-danger">{errors.location_name}</small>}
          </div>

          <div className="field">
            <label className="label has-text-grey-light">Address:</label>
            <div className="control">
              <input
                className={`input ${errors.address ? 'is-danger' : ''}`}
                placeholder="e.g. 10 Rookery Road, Clapham Common, London, SW4 9DD"
                name="address"
                onChange={handleChange}
                value={data.address || ''}
              />
            </div>
            {errors.address && <small className="help is-danger">{errors.address}</small>}
          </div>
  
          <div className="field">
            <label className="label has-text-grey-light">Date:</label>
            <div className="control">
              <input
                className={`input ${errors.date ? 'is-danger' : ''}`}
                placeholder="e.g. in format YYYY-MM-DD"
                name="date"
                onChange={handleChange}
                value={data.date || ''}
              />
            </div>
            {errors.date && <small className="help is-danger">{errors.date}</small>}
          </div>


          <div className="field">
            <label className="label has-text-grey-light">Time:</label>
            <div className="control">
              <input
                className={`input ${errors.time ? 'is-danger' : ''}`}
                placeholder="e.g. in format HH:MM"
                name="time"
                onChange={handleChange}
                value={data.time || ''}
              />
            </div>
            {errors.time && <small className="help is-danger">{errors.time}</small>}
          </div>

          <div className="field">
            <label className="label has-text-grey-light">Position:</label>
            <div className="control">
              <input
                className={`input ${errors.position ? 'is-danger' : ''}`}
                placeholder="e.g. center"
                name="position"
                onChange={handleChange}
                value={data.position || ''}
              />
            </div>
            {errors.position && <small className="help is-danger">{errors.position}</small>}
          </div>

    
          <div className="field">
            <label className="label has-text-grey-light">Number of Players Needed:</label>
            <div className="control">
              <input
                className={`input ${errors.number_of_players_needed ? 'is-danger' : ''}`}
                placeholder="e.g. 2"
                name="number_of_players_needed"
                onChange={handleChange}
                value={data.number_of_players_needed || ''}
              />
            </div>
            {errors.number_of_players_needed && <small className="help is-danger">{errors.number_of_players_needed}</small>}
          </div>

          <div className="field">
            <label className="label has-text-grey-light">Team Name:</label>
            <div className="control">
              <input
                className={`input ${errors.team_name ? 'is-danger' : ''}`}
                placeholder="e.g. The Fulham Footballerzzz"
                name="team_name"
                onChange={handleChange}
                value={data.team_name || ''}
              />
            </div>
            {errors.owner && <small className="help is-danger">{errors.team_name}</small>}
          </div>

          <div className="field">
            <label className="label has-text-grey-light">Image:</label>
            <div className="control">
              <input
                className={`input ${errors.post_image ? 'is-danger' : ''}`}
                placeholder="e.g. http://bit.ly/2QZzGbm"
                name="post_image"
                onChange={handleChange}
                value={data.post_image || ''}
              />
            </div>
            {errors.owner && <small className="help is-danger">{errors.post_image}</small>}
          </div>

          <br></br>
          <button type="submit" className="button is-link is-fullwidth">Submit Request for Ringer(s)</button>

        </form>
      </div>
    </section>
  </div>

)

export default PostForm