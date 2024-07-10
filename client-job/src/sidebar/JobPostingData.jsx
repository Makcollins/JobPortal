import React from 'react'
import InField from '../components/InField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();

    const twentyFourHoursAgo = new Date(now - 24*60*60*1000);
    const seveDaysAgo = new Date(now - 7*24*60*60*1000);
    const thirtyDaysAgo = new Date(now - 30*24*60*60*1000);
    

    //convert date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const seveDaysAgoDate = seveDaysAgo.toISOString().slice(0,10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0,10);
    // console.log(twentyFourHoursAgoDate);
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
        <div>
          <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test"  value="" onChange={handleChange}/>
            <span className='checkmark'></span>All time
          </label>
          <InField name="test" value={twentyFourHoursAgoDate} handleChange={handleChange} title="Last 24 hours" />
          <InField name="test" value={seveDaysAgoDate} handleChange={handleChange} title="Last 7 days" />
          <InField name="test" value={thirtyDaysAgoDate} handleChange={handleChange} title="Last 30 days" />
        </div>
    </div>
  )
}

export default JobPostingData