import React from 'react'
import './AboutStyles.scss'

const About: React.FC = () => {
  return (
    <div className='about'>
      <h4>{'About SpaceX Missions'}</h4>
      <p>
        {
          'This app allows you to view a list of SpaceX missions and to learn more about them. You can also view details about the various payloads of each mission.'
        }
      </p>
    </div>
  )
}

export default About
