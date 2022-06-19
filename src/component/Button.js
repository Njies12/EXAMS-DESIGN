import React from 'react'

const Button = ({ text1, text2,optionKey}) => {
  return (
    <div className='buttons'>
        <button className='btn'>
            {text1}
        </button>
        <span style={{fontSize:"2rem"}}>
            {optionKey}
        </span>
        <button className='btn btn-block'>
            {text2}
        </button>
    </div>
  )
}

export default Button