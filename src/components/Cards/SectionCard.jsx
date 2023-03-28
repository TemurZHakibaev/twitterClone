import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Add, Like, Retweet, Sms, Statss, tribleDot, RedHeart, RetweetGreen} from "../../assets";
import {MainContext} from "../../context/CounterContex";

function SectionCard() {
    const { counter1, setCounter1 } = useContext(MainContext)
    const { counter2, setCounter2 } = useContext(MainContext)
    const { counter3, setCounter3 } = useContext(MainContext)
    const { counter4, setCounter4 } = useContext(MainContext)
    const { counter5, setCounter5 } = useContext(MainContext)

    const [data, setData] = useState([])
    console.log(MainContext)
    const BASE_URL = 'https://63e8ca9b5f3e35d898f59067.mockapi.io/'
    useEffect(() => {
        fetch(`${BASE_URL}shopping`)
            .then((res) => res.json())
            .then((data) => setData(data.slice(0,2)))
    }, [])
    return (
        <>
            {data.map((item, i) =>
                (<div key={i} className='flex text-left justify-between items-start border-b p-3'>
                    <img className='rounded-full w-16 h-16 mt-4' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex gap-3 '>
                            <Link to='/profile' className='flex gap-1 items-center'>
                                <h3 className='text-left font-bold text-[20px]'>{item.name}</h3>
                                <p>@{item.userName}</p>
                            </Link>
                        </div>
                        <p>{item.about}</p>
                        <div  className='flex mt-6 justify-between pl-4'>
                            <div  className='flex gap-3 items-center'  >
                                <img onClick={() => setCounter1(counter1 + 1)} src={Sms} alt="" />
                                <p onClick={() => counter1 === 0 ?  0 : setCounter1(counter1 - 1)}>{counter1}</p>
                            </div>
                            <div className='flex gap-3 items-center'  >
                                <img onClick={() => setCounter2(counter2 + 1)} src={counter2 === 0 ? Retweet : RetweetGreen} alt="" />
                                <p  onClick={() => counter2 === 0 ? 0 : setCounter2(counter2 - 1)}>{counter2}</p>
                            </div>
                            <div className='flex gap-3 items-center'  >
                                    <img onClick={() => setCounter3(counter3 + 1)} src={counter3 > 0 ? RedHeart : Like} />
                                <p  onClick={() => counter3 === 0 ? 0 : setCounter3(counter3 - 1)}>{counter3}</p>
                            </div>
                            <div className='flex gap-3 items-center'  >
                                <img onClick={() => setCounter4(counter4 + 1)} src={Add} alt="" />
                                <p  onClick={() => counter4 === 0 ? 0 : setCounter4(counter4 - 1)}>{counter4}</p>
                            </div>
                            <div className='flex gap-3 items-center'  >
                                <img onClick={() => setCounter5(counter5 + 1)} src={Statss} alt="" />
                                <p onClick={() => counter5 === 0 ? 0 : setCounter5(counter5 - 1)}>{counter5}</p>
                            </div>
                        </div>
                    </div>
                    <img className='mt-10 mr-3' src={tribleDot} alt="" />
                </div>)
            )}
        </>
    );
}

export default SectionCard;