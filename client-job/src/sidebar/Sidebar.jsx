import React from 'react'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'
import Industry from './Industry'

function Sidebar({handleChange,handleClick}) {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filter Jobs</h3>

        <Industry  handleClick={handleClick}/>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>

    </div>
  )
}

export default Sidebar