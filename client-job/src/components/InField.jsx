import React from 'react'

const InField = ({name ,value,handleChange,title}) => {
  return (
    <label className='sidebar-label-container'>
          <input type="radio" name={name}  value={value} onChange={handleChange}/>
          <span className='checkmark'></span>{title}
    </label>
  )
}

export default InField