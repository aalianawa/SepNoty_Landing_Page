import React from 'react'
import './styledComponents.css'
const SearchH = () => {
  return (
    <div className="bg-color">
    <div className='container'>
      <h1>Selected Success Stories from Our 200k -Project Portfolio</h1>
      <form action=''>
        <input type="email" placeholder='Search case studies' className='email' required/>
      </form>
    </div>
    </div>
  )
}

export default SearchH