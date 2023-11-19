import React from 'react'
import { Link } from 'react-router-dom'

const TeamBox = ({image,title,description}) => {
  return (
    
    
        <div className="team-one">
            <img src={image} alt={title} />
            <Link to=""><h3>{title}</h3></Link>
            <p>{description}</p>
            </div>
           
           
  )
}

export default TeamBox