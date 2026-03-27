import React from 'react'
import countryFacts from "../api/countryData.json"


const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the interesting Facts
        <br />
        we're proud of
      </h2>

      <div className='gradient-cards'>
        <div className='card'>
          <div className='container-card bg-blue-box'>
            <p className='card-title'>India</p>
            <p>
              <span className='card-description'>Capital:</span>
              Delhi
            </p>
            <p>
              <span className='card-description'>Population:</span>
              142563588
            </p>
            <p>
              <span className='card-description'>Interesting Facts:</span>
              biggest democracy
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
