import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Jobs from './Jobs';
import Card from '../components/Card';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  const [categorySelect,setCategorySelect] =useState(null);
  const[jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

    //fetch data  
  useEffect(()=>{
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data=>{
      // console.log(data);
      setJobs(data);
      setIsLoading(false);
    })
  },[]);

    //handle input change
  const [query,setQuery] = useState("");
    const handleInputChange = (event) =>{
        setQuery(event.target.value);
    }

    // filter jobs by title
    const filtereditems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
     
    // Radio based button filtering
     const handleChange = (event) =>{
      setCategorySelect(event.target.value);
     }

     //button filtering
     const handleClick = (event) =>{
      setCategorySelect(event.target.value);
     }

     //calc th index range
     const calculatePageRange =() =>{
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {startIndex,endIndex}; 
     }

     //next page function
     const nextPage = () =>{
      if(currentPage < Math.ceil(filtereditems.length/itemsPerPage)){
        setCurrentPage(currentPage+1);
      }
     }
     //previous page funtion
     const prevPage = () => {
      if(currentPage > 1){
        setCurrentPage(currentPage - 1)
      }
     }

     const filteredData = (jobs, selected, query)=>{
      let filteredJobs = jobs;

      //filtering input items
      if(query){
        filteredJobs = filtereditems;
      }

      // category filtering
      if(selected){
        filteredJobs = filteredJobs.filter(({jobLocation, qualification, experienceLevel, industry,employmentType,deadline})=>(
          jobLocation.toLowerCase() === selected.toLowerCase() || 
          qualification.toLowerCase() === selected.toLowerCase() ||
          deadline >= selected ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          industry.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
         
        ));
      }

      //slice the data based on current page 
      const {startIndex,endIndex} = calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex, endIndex);

      return filteredJobs.map((data,i)=> <Card key={i} data={data}/>)
     }

     const result = filteredData(jobs,categorySelect, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} handleChange={handleChange}/>

      {/* main content */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-3 gap-8 lg:px-24 px-4 py-12'>

              {/*Left- side job cards */}
        <div className='col-span-2 bg-white p-4 rounded'>

          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) :<>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No data found</p>
            </>
          }

          {/* pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} className='hover:underline' disabled = {currentPage=== 1}>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filtereditems.length/itemsPerPage)}</span>
                <button onClick={nextPage} disabled = {currentPage === Math.ceil(filtereditems.length / 
                itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }
          
        </div>

        {/* right side */}
        <div className='bg-white p-4  rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home