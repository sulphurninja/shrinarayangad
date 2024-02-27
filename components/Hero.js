import React from 'react'

export default function Hero() {
    return (
        <div className='flex justify-center  h-96 object-cover mt-12 shadow-md shadow-black rounded-xl bg-black '>
            <img src='/01.jpg' className='w-full object-cover opacity-60 rounded-xl' />
            <div className='text-white mt-32  font-noto  absolute font-bold'>
                <h1 className='lg:text-5xl text-2xl '>श्री क्षेत्र संस्थान नारायण गड</h1>
                <p className='lg:text-2xl text-xl text-center mt-4 text-zinc-200'>“धाकटी पंढरी ”</p>
            </div>
        </div>
    )
}
