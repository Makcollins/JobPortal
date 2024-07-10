import React from 'react'
import InField from '../components/InField'


function Location({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>
        <div>
          <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
            <span className='checkmark'></span>All
          </label>
          <InField name="test" value="london" handleChange={handleChange} title="London" />
          <InField name="test" value="brussels" handleChange={handleChange} title="Brussels" />
          <InField name="test" value="san fransisco" handleChange={handleChange} title="San Francisco" />
          <InField name="test" value="seattle" handleChange={handleChange} title="Seattle" />
          <InField name="test" value="boston" handleChange={handleChange} title="Boston" />
        </div>
    </div>
  )
}

export default Location