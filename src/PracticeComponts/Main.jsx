import React, { useState } from 'react'
import Bitz from './Bitz';
import NormalTask from './NormalTask';

function Main() {

    const [bitz, setBitz] = useState(true);
    const [normal, setNormal] = useState(false)

    const showbitz = () => {
        setBitz(true)
        setNormal(false)
    }
    const shownormal = () => {
        setBitz(false)
        setNormal(true)
    }

    return (
        <div>
            <div className='flex bg-slate-600  text-white justify-center '>
                <button className='bg-[rgb(229,9,20)] text-white h-[2.9rem] w-[12rem]  rounded mt-[1rem] mx-4 text-2xl font-extrabold' onClick={() => showbitz()}> Bitz</button><br></br>
                <button className='bg-[rgb(229,9,20)] text-white h-[2.9rem] w-[12rem] rounded mt-[1rem] mx-4 text-2xl font-extrabold' onClick={() => shownormal()}> Normal Task</button>
                <div>
                    {bitz && <Bitz />}
                    {normal && <NormalTask />}
                </div>
            </div>

        </div>
    )
}

export default Main