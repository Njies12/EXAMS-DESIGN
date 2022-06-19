import React from 'react'
import Service from './Service'

const Services = ({services}) => {
  return (
    <div className='services-container'>
        {services
           .map((service)=>{
            return <Service 
            key={service.id} 
            service={service}/>
        })}
    </div>
  )
}

export default Services