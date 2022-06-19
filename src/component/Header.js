import React from 'react'

const Header = ({ mainLogo, subLogo }) => {
  return (
    <div  className='header-container'>
       <div className='sub-header-container' >
            <hr  className='header-line'/>
            <h1 className='mainLogo' > 
               {mainLogo}
            </h1>
       </div>
       <h2>
           {subLogo}
        </h2>
        
    </div>
  )
}




export default Header