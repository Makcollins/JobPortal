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
      <InField name="test" value="No Experience" handleChange={handleChange} title="No Experience" />
      <InField name="test" value="Less than 1 year" handleChange={handleChange} title="Less than 1 year" />
      <InField name="test" value="Atleast 2 years" handleChange={handleChange} title="Atleast 2 years" />
      <InField name="test" value="More than 3 years" handleChange={handleChange} title="More than 3 years" />
      <InField name="test" value="More than 5 years" handleChange={handleChange} title="More than 5 years" />
    </div>
</div>
  )
}

export default WorkExperience