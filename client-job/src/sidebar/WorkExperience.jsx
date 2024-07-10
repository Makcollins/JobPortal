import React from 'react'
import InField from '../components/InField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
        <span className='checkmark'></span>Any experience
      </label>
      <InField name="test" value="internship" handleChange={handleChange} title="Internship" />
      <InField name="test" value="work remotely" handleChange={handleChange} title="Work remotely" />
    </div>
</div>
  )
}

export default WorkExperience