import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {ProfileBg, ProfilePerson, LinkImg, Geo, Date, Born} from "../../assets";
import SectionCard from "../Cards/SectionCard";

function Profile() {
    const randomFollowers = (a)=>{
        return Math.floor(Math.random(a) * 1000)
    }

    return (
        <div className='w-[990px] border-x'>
            <div className='flex gap-10 items-center px-7'>
                <Link to='/'> <AiOutlineArrowLeft size={20}/></Link>
                <div>
                    <h3>Bobur</h3>
                    <p>1,070 Tweets</p>
                </div>
            </div>
            <div>
                <img className='relative' src={ProfileBg}/>
                <img className='absolute top-60 left-[400px]' src={ProfilePerson}/>
                <div className='flex justify-end mt-7 '>
                    <button className=' border py-2 px-4 rounded-full font-semibold ml-4'>Edit Profile</button>
                </div>
            </div>
            <div className='mt-2.5 p-4'>
                <h3 className='font-bold text-[24px]'>Bobur</h3>
                <p>@bobur_mavlonov</p>
                <p className='my-3.5 text-[18px]'>UX&UI designer at <a className='text-lightBlue'  href='https://abutech.uz/'>@abutechuz</a></p>
                <div className='flex justify-between my-4'>
                    <div className='flex gap-1'><img src={Geo}/> <p>Mashag’daman</p></div>
                    <div className='flex gap-1'><img src={LinkImg}/> <a className='text-lightBlue' href='http://t.me/temur_zh'>t.me/boburjon_mavlonov</a></div>
                    <div className='flex gap-1'><img src={Born}/> <p>Born November 24, 2000</p></div>
                    <div className='flex gap-1'><img src={Date}/> <p>Joined May 2020</p></div>
                </div>
                <div className='flex p-5 gap-10 mb-10'>
                    <p>{randomFollowers(10)} Following</p>
                    <p>{randomFollowers(10)} Followers</p>
                </div>

            </div>
            <SectionCard/>
        </div>
    );
}

export default Profile;