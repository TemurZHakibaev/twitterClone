import React from 'react'
import {
  Home, Bookmark, Explore, Lists, Masseges, More, Notification, Profile, TwitterLogo, leftPerson, tribleDot,
} from '../../assets/index.js'
import {Link} from "react-router-dom";

export default function Section() {
  const imgTitles = [
    { img: Home },
    { img: Explore },
    { img: Notification },
    { img: Masseges },
    { img: Bookmark },
    { img: Lists },
    { img: Profile },
    { img: More },
  ]

  const titles = [
    { title: 'Home' },
    { title: 'Explore' },
    { title: 'Notification' },
    { title: 'Message' },
    { title: 'Bookmarks' },
    { title: 'Lists' },
    { title: 'Profile' },
    { title: 'More' },
  ]

  return (
    <>
      <div className='w-[283px]'>
        <div>
          <img src={TwitterLogo} alt="" />
          <div className='flex items-center gap-5 w-[283px] mt-5' >
            <div>
              {imgTitles.map((image, i) => <img className='mt-7' key={i} src={image.img} alt='' />)}
            </div>
            <div>
              {titles.map((image, i) => <p className='font-semibold text-[18px] mt-7' key={i}>{image.title}</p>)}
            </div>
          </div>
          <div>
            <button className='text-white bg-lightBlue py-4 px-24 rounded-full ml-[-10px] mt-8 font-bold outline-none'>Tweet</button>
          </div>
          <div className='flex items-center mt-64'>
              <Link className='mr-3' to='/profile'>

              <img src={leftPerson} alt="" />
              </Link>
            <div className='flex items-center'>
              <div className='mr-10'>
                <Link to='/profile'>
                <h4 className='font-semibold '>Bobur</h4>
                <p>@bobur_mavlonov</p>
                </Link>
              </div>
              <div><img onClick={() => console.log('click')} className='cursor-pointer' src={tribleDot} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  )
}
