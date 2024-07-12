import React from 'react'

const Footer = () => {
  return (
    <div>
        <hr />
        <div className='bg-white md:grid grid-cols-3 gap-8 lg:px-24 px-4 py-12'>
            {/* left */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Get Jobs in any Industry</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque a quo minus aliquid voluptatibus cum nostrum quae recusandae similique dolore eius at, excepturi exercitationem repellat sequi delectus doloremque mollitia?</p>
            </div>
            {/* middle */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Get Jobs in any Country</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque a quo minus aliquid voluptatibus cum nostrum quae recusandae similique dolore eius at, excepturi exercitationem repellat sequi delectus doloremque mollitia?</p>
            </div>
            {/* right */}
            <div>
                <h3 className='text-lg font-bold mb-2'>Get a Job of your interest
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque a quo minus aliquid voluptatibus cum nostrum quae recusandae similique dolore eius at, excepturi exercitationem repellat sequi delectus doloremque mollitia?</p>
            </div>
            <div className='col-span-3 flex justify-center'>
                <span>_____________________________________________________________________</span>
            </div>
            <div className='col-span-3 flex justify-center'>
                <p><span className='font-semibold'>Maworks </span>Job Portal was developed by <span className='text-blue'>Collins Makui</span> to demonstrate understanding of MERN stack during the the intership @ Edureka.</p>
            </div>
            <div className='col-span-3 flex justify-center'>
                <span>@2024</span>
            </div>
        </div>
    </div>
  )
}

export default Footer