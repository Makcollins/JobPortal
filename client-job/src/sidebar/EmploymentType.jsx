import React from 'react'
import InField from '../components/InField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
        <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
            <span className='checkmark'></span>Any
        </label>
        <InField name="test" value="Full-time" handleChange={handleChange} title="Full-time" />
        <InField name="test" value="Temporary" handleChange={handleChange} title="Temporary" />
        <InField name="test" value="Part-time" handleChange={handleChange} title="Part-time" />
        </div>  
    </div>
  )
}

export default EmploymentType