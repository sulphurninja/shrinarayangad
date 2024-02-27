import React from 'react'

export default function Explore({ title, description, image }) {
    return (
        <div className='lg:h-40 object-cover '>
        <div className='bg-black object-cover  w-full rounded-2xl'>
            <img src={image} className='object-cover w-full h-40 rounded-2xl' />
        </div>
        <h1 className='p-2 text-[#15110D] mt-2 font-bold text-lg font-noto '>{title}</h1>
        <p className='px-2 text-[#895e2f] text-sm font-noto '>{description}</p>
        </div>
    )
}
