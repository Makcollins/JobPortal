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
        <InField name="test" value="On-Site" handleChange={handleChange} title="On-Site" />
        <InField name="test" value="Remote" handleChange={handleChange} title="Remote" />
        </div>  
    </div>
  )
}

export default EmploymentType