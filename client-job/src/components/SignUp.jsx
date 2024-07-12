import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FirebaseLogin from './Firebase';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/signup", { email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };
  return (
    <div>
       
        <div className='h-screen w-full flex items-center justify-center'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Maworks Jobs"
                src="https://i.ibb.co/XzDjKgF/maworklg.png"
                className="mx-auto h-10 w-auto"
            />
            <div className='mt-6'><FirebaseLogin/></div>
            <div className='mt-6 flex w-full justify-center'>--OR--</div>
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create an Account
            </h2>
            </div>
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignup} className="space-y-6">
                <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email" type="email" placeholder="Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)} required autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                    type="password" placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)} 
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Create an Account
                </button>
                </div>
                
               
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <a href="#" >
                <Link to={"/login"} className="font-semibold leading-6 text-blue hover:text-gray-800">Login here</Link>
                </a>
            </p>
            </div>
        </div>
            
        </div>      

    </div>
    
  )
}

export default SignUp