import React from 'react'

const Facility = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-5xl   items-center  justify-center  mx-auto gap-4 py-8' >
      <div className='bg-white shadow-sm shadow-black  w-1/2 rounded-md'>
      <div className='bg-blue-500 w-full rounded-t-md'> 
      <h1 className=' p-3 text-2xl font-bold text-center text-white '>Get Facilities</h1></div>
        
        <ul className='px-2 py-2'>
            <li className='my-[10px]'>★ Advance- 45,00,000/-</li>
            <li className='my-[10px]'>★ Rent- 25,000/- Monthly</li>
            <li className='my-[10px]'>★ 20 Year Court Agreement</li>
        </ul>
      </div>
      <div className='bg-white shadow-sm shadow-black  w-1/2 rounded-md'>
        <div className='bg-blue-500 w-full rounded-t-md'>
        <h1 className=' text-white p-3 text-2xl font-bold text-center' >Requirement</h1>
        </div>
       
        <ul className='px-2 py-2'>
            <li className='my-[10px]'>★ LAND 20X20=400 SQFT</li>
            <li className='mb-[10px]'>★ Land Papers</li>
            <li className='mb-[10px]'>★ ID Proof</li>
        </ul>
      </div>
    </div>
  )
}

export default Facility
