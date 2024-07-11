import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData, useParams } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';

const Update = () => {
    const {id} = useParams
    // console.log(id)

    const {_id, jobTitle, companyName, minPrice, maxPrice , salaryType, jobLocation, postingDate, 
      experienceLevel, companyLogo, employmentType, description, postedBy, skills
    } = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(null);
  const { register, handleSubmit, reset,formState: { errors } } = useForm();

  const onSubmit = (data) => {
      data.skills = selectedOption;
      // console.log(data);
      
      fetch(`http://localhost:3000/update-job/${id}`,{
          method: "PATCH",
          headers: {"content-type":"application/json"},
          body: JSON.stringify(data)
      })
      .then(res =>res.json())
      .then((result) => {
          // console.log(result)
          if(result.acknowledged===true){
              alert("Updated!!!");
          }
          reset();
      })
  };
  const options = [
      {value: "JavaScript", label: "JavaScript"},
      {value: "C++", label: "C++"},
      {value: "HTML", label: "HTML"},
      {value: "CSS", label: "CSS"},
      {value: "Node", label: "Node"},
      {value: "MongoDB", label: "MongoDB"},
      {value: "Redux", label: "Redux"},
  ]


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    {/* form */}
    <div className='bg-[#FAFAFA] PY-10px lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* First row */}
            <div className='create-job-flex space-y-5'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Title</label>
                    <input type="text" defaultValue={jobTitle} {...register("jobTitle")} 
                    className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Name</label>
                    <input type="text" placeholder='Ex: Google'
                    defaultValue={companyName} {...register("companyName")} 
                    className='create-job-input' />
                </div>
            </div>

            {/* Second row */}
            <div className='create-job-flex space-y-5'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Minimum salary</label>
                    <input type="text" placeholder='$20k' 
                    defaultValue={minPrice} {...register("minPrice")} 
                    className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Maximum Salary</label>
                    <input type="text" placeholder='$100k' {...register("maxPrice")} 
                    defaultValue={maxPrice}
                    className='create-job-input' />
                </div>
            </div>

            {/* Third row */}
            <div className='create-job-flex space-y-5'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Salary type</label>
                    <select {...register("salaryType")} className='create-job-input'>
                        <option value={salaryType}>{salaryType}</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Location</label>
                    <input type="text" placeholder='Ex: London'
                    defaultValue={jobLocation} {...register("jobLocation")} 
                    className='create-job-input' />
                </div>
            </div>

            {/* Fourth row */}
            <div className='create-job-flex space-y-5'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Job Posting date</label>
                    <input type="date" placeholder='Ex: 2024-07-08'
                    defaultValue={postingDate} {...register("postingDate")} 
                    className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Expereince level</label>
                    <select {...register("experienceLevel")}
                    className='create-job-input'>
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value="No Experience">No Experience</option>
                        <option value="Internship">Internship</option>
                        <option value="Work Remotely">Work Remotely</option>
                    </select>
                </div>
                
            </div>

            {/* 5th row */}
            <div className='block mb-2 text-lg'>
                <label className='block mb-2 text-lg'>Required Skills Sets</label>
                <CreatableSelect defaultValue={skills} onChange={setSelectedOption}
                options={options} isMulti className='create-job-input'/>
            </div>

            {/* Sixth row */}
            <div className='create-job-flex space-y-5'>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Company Logo</label>
                    <input type="url" placeholder='Paste your company logo url: https://abc.com/pis'
                     defaultValue={companyLogo} {...register("companyLogo")} 
                    className='create-job-input' />
                </div>
                <div className='lg:w-1/2 w-full'>
                    <label className='block mb-2 text-lg'>Employmet type</label>
                    <select {...register("employmentType")} className='create-job-input'>
                        <option value={employmentType}>{employmentType}</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                    </select>
                </div>
                
            </div>

            {/* Seventh row */}
            <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Description</label>
                <textarea  className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                rows={6}
                defaultValue={description}
                placeholder='Job description' {...register("description")}/>
            </div>
            <div>
                <label className='block mb-2 text-lg'>Job Posted By</label> 
                <input type="email" placeholder='your email'  defaultValue={postedBy} {...register("postedBy")} 
                    className='create-job-input' />
            </div>
            <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />

        </form>
    </div>
</div>
  )
}

export default Update