import React from 'react'
// import ReactDOM from 'react-dom'
// import Select from 'react-select'
// import makeAnimated from 'react-select/animated'

// const animatedComponents = makeAnimated()

const PostForm = ({ data, handleChange, handleSubmit, errors, sports }) => (

  <section className="section">
    <div className="container">


      <form onSubmit={handleSubmit}>

        <div className="field">
          <label className="label">Name of Post:</label>
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
          <label className="label">Sport Name:</label>
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
          <label className="label">Location Name:</label>
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
          <label className="label">Address:</label>
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
          <label className="label">Date:</label>
          <div className="control">
            <input
              className={`input ${errors.date ? 'is-danger' : ''}`}
              placeholder="e.g. Mon 20th December"
              name="date"
              onChange={handleChange}
              value={data.date || ''}
            />
          </div>
          {errors.date && <small className="help is-danger">{errors.date}</small>}
        </div>


        <div className="field">
          <label className="label">Time:</label>
          <div className="control">
            <input
              className={`input ${errors.time ? 'is-danger' : ''}`}
              placeholder="e.g. 3pm"
              name="time"
              onChange={handleChange}
              value={data.time || ''}
            />
          </div>
          {errors.time && <small className="help is-danger">{errors.time}</small>}
        </div>

        <div className="field">
          <label className="label">Position:</label>
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
          <label className="label">Number of Players Needed:</label>
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
          <label className="label">Team Name:</label>
          <div className="control">
            <input
              className={`input ${errors.owner ? 'is-danger' : ''}`}
              placeholder="e.g. The Fulham Footballerzzz"
              name="owner"
              onChange={handleChange}
              value={data.owner || ''}
            />
          </div>
          {errors.owner && <small className="help is-danger">{errors.owner}</small>}
        </div>

        <button type="submit" className="button is-info is-fullwidth">Submit Request for Ringer(s)</button>

      </form>
    </div>
  </section>

)

export default PostForm