import React from 'react'

export default function Posts({ title, description, image }) {
    return (
        <div className='p-4  flex lg:h-44 '>
            <div className=' w-96'>
                <h1 className='p-2 text-[#15110D] mt-2 font-bold text-lg font-noto '>{title}</h1>
                <p className='px-2 text-[#895e2f]  text-xs font-noto '>{description}</p>
                <div className='p-2 px-3 m-2 text-sm w-fit rounded-xl bg-[#F3EEE7] '>
                   <h1 className='font-noto'>
                   Read More
                   </h1> 
                </div>
            </div>
            <div className='bg-black  object-cover w-80 h-48  ml-auto rounded-2xl'>
                <img src={image} className='object-cover w-80 h-48 rounded-2xl' />
            </div>

        </div>
    )
}
