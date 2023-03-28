import React from 'react'
import {Settings, tribleDot, Person1, Person2} from "../../assets/index";

export default function RightSection() {
    return (
        <div className='w-[390px] p-5'>
            <input type='text' className='bg-[#EFF3F4] py-4 pl-20 pr-28 rounded-full mb-5' placeholder='Search Twitter'/>
            <div className='p-4'>
                <div className='flex justify-between items-center'><h3 className='font-bold text-[24px]'>Trends for you</h3> <img src={Settings}/></div>
                <div className='mt-4'>
                    <div className='flex justify-between items-start mt-4'>
                        <div>
                            <h5 className='text-[#393B41]'>Trending in Germany</h5>
                            <h4 className='my-0.5 font-semibold text-[20px]'>Revolution</h4>
                            <h5 className='text-[#393B41]'>50.4K Tweets</h5>
                        </div>
                        <img className='mt-5' src={tribleDot}/>
                    </div>

                    <div className='flex justify-between items-start mt-4'>
                        <div>
                            <h5 className='text-[#393B41]'>Trending in Germany</h5>
                            <h4 className='my-0.5 font-semibold text-[20px]'>Revolution</h4>
                            <h5 className='text-[#393B41]'>50.4K Tweets</h5>
                        </div>
                        <img className='mt-5' src={tribleDot}/>
                    </div>
                    <div className='flex justify-between items-start mt-4 mb-7'>
                    <div>
                        <h5 className='text-[#393B41]'>Trending in Germany</h5>
                        <h4 className='my-0.5 font-semibold text-[20px]'>Revolution</h4>
                        <h5 className='text-[#393B41]'>50.4K Tweets</h5>
                    </div>
                    <img className='mt-5' src={tribleDot}/>
                    </div>
                    <a href='/' className='text-lightBlue text-[18px]'>Show more</a>
                </div>


                <div className='mt-10'>
                    <h2 className='mb-6 font-bold '>You might like</h2>
                    <div className='flex justify-between items-center'>
                        <img src={Person1}/>
                        <div>
                            <h4>Mushtariy</h4>
                            <p>@Mushtar565266</p>
                        </div>
                        <button className='text-white bg-black py-2 px-4 rounded-full font-bold'>Follow</button>
                    </div>
                    <div className='flex justify-between items-center mb-8 mt-6'>
                        <img src={Person2}/>
                        <div>
                            <h4>Shuhratbek</h4>
                            <p>@mrshukhrat</p>
                        </div>
                        <button className='text-white bg-black py-2 px-4 rounded-full font-bold'>Follow</button>
                    </div>
                    <a href='/' className='text-lightBlue text-[18px]'>Show more</a>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
