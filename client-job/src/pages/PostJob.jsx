import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import Select from '../components/Select';


const PostJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, reset,formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        
        fetch("https://jobportal-backend-waol.onrender.com/post-job",{
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(res =>res.json())
        .then((result) => {
            // console.log(result)
            if(result.acknowledged===true){
                alert("Submitted!!!");
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
                        <input type="text" defaultValue={"web developer"} {...register("jobTitle")} 
                        className='create-job-input' />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Name</label>
                        <input type="text" placeholder='Ex: Google' {...register("companyName")} 
                        className='create-job-input' />
                    </div>
                </div>

                {/* Second row */}
                <div className='create-job-flex space-y-5'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Salary (optional)</label>
                        <select {...register("salary")} className='create-job-input'>
                            <option value="">Select</option>
                            <option value="$20 - $50">$20 - $50</option>
                            <option value="$50 - $60">$50 - $60</option>
                            <option value="$60 - $80">$60 - $80</option>
                            <option value="$80 - $100">$80 - $100</option>
                            <option value="$100 - $120">$100 - $120</option>
                            <option value="$120 - more">$120 - more</option>
                        </select>

                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Qualification</label>
                        <input type="text" placeholder='Ex: Bsc. Computer Science' {...register("qualification")} 
                        className='create-job-input' />
                    </div>
                </div>

                {/* Third row */}
                <div className='create-job-flex space-y-5'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Industry</label>
                        <select {...register("industry")} className='create-job-input'>
                            <option value="">Select</option>
                            <option value="Education">Education</option>
                            <option value="Technology">Technology</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Medical">Medical</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Finance">Finance</option>
                            <option value="Arts">Arts</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Hospitality">Hospitality</option>
                        </select>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Job Location</label>
                        <select {...register("jobLocation")} className='create-job-input'>
                            <Select/>
                        </select>
                    </div>
                </div>

                {/* Fourth row */}
                <div className='create-job-flex space-y-5'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Deadline for application</label>
                        <input type="date" placeholder='Ex: 2024-07-08' {...register("deadline")} 
                        className='create-job-input' />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Experience</label>
                        <select {...register("experienceLevel")} className='create-job-input'>
                            <option value="">No Experience</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="Atleast 2 years">Atleast 2 years</option>
                            <option value="More than 3 years">More than 3 years</option>
                            <option value="More than 5 years">More than 5 years</option>
                        </select>
                    </div>
                    
                </div>

                {/* 5th row */}
                <div className='block mb-2 text-lg'>
                    <label className='block mb-2 text-lg'>Required Skills Sets</label>
                    <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption}
                    options={options} isMulti className='create-job-input'/>
                </div>

                {/* Sixth row */}
                <div className='create-job-flex space-y-5'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Company Logo</label>
                        <input type="url" placeholder='Paste your company logo url: https://abc.com/pis' {...register("companyLogo")} 
                        className='create-job-input' />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block mb-2 text-lg'>Employment type</label>
                        <select {...register("employmentType")} className='create-job-input'>
                            <option value="">--Select--</option>
                            <option value="On-Site">On-Site</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>
                    
                </div>

                {/* Seventh row */}
                <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea  className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                    rows={6}
                    defaultValue={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis incidunt aperiam eum optio amet placeat ad doloribus consequuntur perspiciatis quae, velit nesciunt ipsam animi quibusdam?"}
                    placeholder='Job description' {...register("description")}/>
                </div>
                <div>
                    <label className='block mb-2 text-lg'>Job Posted By</label> 
                    <input type="email" placeholder='your email' {...register("postedBy")} 
                        className='create-job-input' />
                </div>
                <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />

            </form>
        </div>
    </div>
  )
}

export default PostJob
