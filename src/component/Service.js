import React from 'react'

const Service = ({service}) => {
  return (
    <div className='services'>
        <p className='service'>
            {service.logo}
        </p>
        <h3 className='service'>
            {service.title}
        </h3>
        <p className='service'>
            {service.description}
        </p>

    </div>
  )
}

export default Service