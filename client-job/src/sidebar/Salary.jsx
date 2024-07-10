import React from 'react'
import Button from './Button'
import InField from '../components/InField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-2'>
            <Button onClickHandler={handleClick} value="" title="Hourly"/>
            <Button onClickHandler={handleClick} value="monthly" title="Monthly"/>
            <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
        </div>

        <label className='sidebar-label-container'>
            <input type="radio" name="test2" id="test"  value="" onChange={handleChange}/>
            <span className='checkmark'></span>Any
        </label>
        <InField name="test2" value={30} handleChange={handleChange} title="< 30000k" />
        <InField name="test2" value={50} handleChange={handleChange} title="< 50000k" />
        <InField name="test2" value={80} handleChange={handleChange} title="< 80000k" />
        <InField name="test2" value={100} handleChange={handleChange} title="< 100000k" />

        
    </div>
  )
}

export default Salary