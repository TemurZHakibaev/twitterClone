import {
    Blestyashka, Image, Schedule, Stats, Person1, Gif, Smile
} from '../../assets/index.js'
import SectionCard from "../Cards/SectionCard";


export default function MiddleSection() {
    return (
        <div className='w-[909px] border-x'>
            <div className='p-5 border-b flex justify-between items-center'>
                <h2 className='text-2xl font-extrabold'>Home</h2>
                <img src={Blestyashka} alt="" />
            </div>
            <div>
                <div className='flex gap-5 items-center border-y pb-11 p-4'>
                    <img className='rounded-full w-16 h-16' src={Person1} />
                    <div className='mt-[60px]'>
                        <h4 className='text-[22px] mb-5 text-gray-400 '>What’s happening</h4>
                        <div className='flex gap-5'>
                            <img className='cursor-pointer' src={Image} alt="" />
                            <img className='cursor-pointer' src={Gif} alt="" />
                            <img className='cursor-pointer' src={Stats} alt="" />
                            <img className='cursor-pointer' src={Smile} alt="" />
                            <img className='cursor-pointer' src={Schedule} alt="" />
                        </div>
                    </div>
                </div>
                <div >

                    <SectionCard/>
                </div>
            </div>
        </div>
        )
}
