import React from 'react';
import {Link} from 'react-router-dom';
import { GrCalendar, GrMap } from "react-icons/gr";
import { LuAlarmClock } from "react-icons/lu";
import { PiCurrencyDollarBold } from "react-icons/pi";

const Card = ({data}) => {
    const {job_id,company_name,thumbnail,title,salary,detected_extensions,location,
        description}= data;
  return (
    <section className='card hover:shadow-inner '>
        <Link to={`/job/${job_id}`} className='flex gap-4 flex-col sm:flex-row items-start '>
            <img src={thumbnail} alt={`${company_name} logo`} className='w-20 max-h-20' />        
            <div>
                <h4 className='text-primary mb-1'>{company_name}</h4>
                <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><GrMap /> {location}</span>
                    <span className='flex items-center gap-2'><LuAlarmClock /> {detected_extensions.schedule_type}</span>
                    <span className='flex items-center gap-1'><PiCurrencyDollarBold/>{salary || '_'} k</span>
                    <span className='flex items-center gap-2'><GrCalendar /> {detected_extensions.posted_at}</span>

                </div>
                <p className='text-primary/70 text-base line-clamp-4'>{description}</p>
            </div>
        </Link>
    </section>
  )
}

export default Card