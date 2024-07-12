import React from 'react'
import Button from './Button'

const Industry = ({handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'><i class="fa fa-industry" aria-hidden="true"></i>Industry</h4>
        <div className='mb-2'>
            <Button onClickHandler={handleClick} value="Education" title="Education"/>
            <Button onClickHandler={handleClick} value="Technology" title="Technology"/>
            <Button onClickHandler={handleClick} value="Engineering" title="Engineering"/>
            <Button onClickHandler={handleClick} value="Medical" title="Medical"/>
            <Button onClickHandler={handleClick} value="Agriculture" title="Agriculture"/>
            <Button onClickHandler={handleClick} value="Finance" title="Finance"/>
            <Button onClickHandler={handleClick} value="Arts" title="Arts"/>
            <Button onClickHandler={handleClick} value="Marketing" title="Marketing"/>
            <Button onClickHandler={handleClick} value="Hospitality" title="Hospitality"/>
            <Button onClickHandler={handleClick} value="Hospitality" title="Hospitality"/>
        </div>

        {/* <label className='sidebar-label-container'>
            <input type="radio" name="test2" id="test"  value="" onChange={handleChange}/>
            <span className='checkmark'></span>Any
        </label>
        <InField name="test2" value={30} handleChange={handleChange} title="< 30000k" />
        <InField name="test2" value={50} handleChange={handleChange} title="< 50000k" />
        <InField name="test2" value={80} handleChange={handleChange} title="< 80000k" />
        <InField name="test2" value={100} handleChange={handleChange} title="< 100000k" /> */}

        
    </div>
  )
}

export default Industry;