import React from 'react';
import {Link} from 'react-router-dom';
import { GrCalendar, GrMap } from "react-icons/gr";
import { LuAlarmClock } from "react-icons/lu";
import { PiCurrencyDollarBold } from "react-icons/pi";

const Card = ({data}) => {
    const {_id,companyName,companyLogo,jobTitle,salary,qualification,industry,jobLocation,employmentType,deadline,
        description}= data;
  return (
    <section className='card hover:shadow-inner '>
        <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start '>
            <img src={companyLogo} alt="" className='w-20 max-h-20' />        
            <div>
                <h4 className='text-primary mb-1'>{companyName}</h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><GrMap /> {jobLocation}</span>
                    <span className='flex items-center gap-2'><LuAlarmClock /> {employmentType}</span>
                    <span className='flex items-center gap-2'><PiCurrencyDollarBold/> {salary}k</span>
                    <span className='flex items-center gap-2'><GrCalendar /> {deadline}</span>

                </div>
                <p className='text-primary/70 text-base'>{description}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card