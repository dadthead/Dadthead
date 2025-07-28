import React from 'react'

const Content = () => {
    return (
        <div className='bg-black w-full px-4 sm:px-6 md:px-16 py-12 overflow-x-hidden'>
            <h2 className="text-4xl lg:text-5xl underline decoration-1 underline-offset-8  font-semibold mb-10 text-amber-400">Our Works</h2>
            <div className='max-w-7xl mx-auto text-white '>
                <p className='text-lg  hover:underline-offset-4'>
                    <a href='all' className='hover:text-amber-400 underline underline-offset-4 '>All Works</a> &nbsp; &nbsp;
                    <a href='/webdevelop' className='hover:text-amber-400 underline underline-offset-4'>Website Development</a> &nbsp; &nbsp;
                    <a href='/socialmedia' className='hover:text-amber-400 underline underline-offset-4'>Social Media Optimization</a> &nbsp; &nbsp;
                    <a href='/socialmediamarketing' className='hover:text-amber-400 underline underline-offset-4'>Social Media Marketing</a> &nbsp; &nbsp;
                    <a href='/graphic' className='hover:text-amber-400 underline underline-offset-4'>Graphic Design</a> &nbsp; &nbsp;
                    <a href='/seo' className='hover:text-amber-400 underline underline-offset-4'>Search Engine Optimization</a> &nbsp; &nbsp;
                    <a href='/seomarketing' className='hover:text-amber-400 underline underline-offset-4'>Search Engine Marketing</a> &nbsp; &nbsp;
                    <a href='/contentmarketing' className='hover:text-amber-400 underline underline-offset-4'>Content Marketing</a> &nbsp; &nbsp;
                    <a href='/datanalytics' className='hover:text-amber-400 underline underline-offset-4'>Data Analytics</a> &nbsp; &nbsp;



                </p>
            </div>
        </div>
    )
}

export default Content  








