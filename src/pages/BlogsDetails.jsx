import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogsDetails = () => {
  const location = useLocation();
  console.log(location,"userLocation");
  
  const { image, date, title, description, author} = location.state;
  return (
    <div className="min-h-[550px] pt-20">
      <div className="h-[300px] overflow-hidden">
        <img src={image} alt="" className="mx-auto h-[300px] w-full object-conver transition duration-700 hover:scale-110" />
      </div>
      <div className="container pb-19">
        <p className="text-slate-600 text-sm py-3">writterby{author} on date {date}</p>
        <h1 className="text-2xl font-semibold mb-10">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  )
}

export default BlogsDetails