import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]) 
    useEffect(()=> {
        fetch(`http://localhost:3000/all-jobs/${id}`)
        .then(res => res.json())
        .then(data => setJob(data))
    },[])

    // const jobskills = job.skills

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter your resume URL"
          });
          if (url) {
            Swal.fire(`Entered URL(resume): ${url}`);
          }
    }
 console.log(job.skills)

 const arrayDataItems = job.skills?.map((jobskill,index) => <li>{jobskill.value}</li>);
 console.log(arrayDataItems)
 
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* <PageHeader/> */}
        <h1><strong>Company name:</strong> {job.companyName}</h1>
        <h1><strong>Job Title:</strong> {job.jobTitle}</h1>
        <h1><strong>Salary:</strong> {job.salary}</h1>
        <p>Job Location: {job.jobLocation}</p>
        <br />
        <h1 className='font-bold'>Job description: </h1>
        <p>{job.description}</p>
        <br />
        <h1 className='font-bold'>Job Requirements:</h1>
        <ol> 
          <li className='flex'>
            <span className='font-medium'>Skills:{" "}-</span>
              <ul>{arrayDataItems}</ul>
          </li>
          <li><span className='font-medium'>Academic qualification: </span>{job.qualification}</li>
        </ol>
        <br />
        <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails