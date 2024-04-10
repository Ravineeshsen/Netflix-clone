import React from 'react'

function Movies() {
    const Data = [
        {
            id: 1,
            poster: 'https://file.pngbackground.com/uploads/thumbnail/spider-man-full-hd-mobile-screen-wallpapers-download-free-pictures-11643273751xmzgsdyp0i.jpg',
            Name: 'Spider man',
        },
        {
            id: 2,
            poster: 'https://images.hungama.com/c/1/cc0/f34/95428910/95428910_1280x800.jpg',
            Name: 'Spider man',
        }, {
            id: 3,
            poster: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVr3AdhNeyrkV5sEf77Or41uiW1k_PNS0dxk2LGzXXjDRAHhRYfBJqm0RlSKiOlnV-A-9fC_u1g3euupMaFmKo3uoHedUlwSwTKJ.jpg?r=850',
            Name: 'Spider man',
        }, 
        {
            id: 4,
            poster: 'https://i.pinimg.com/736x/4f/e8/39/4fe839b6b0fa96ea7c6b4667313388aa.jpg',
            Name: 'Spider man',
        },
        {
            id: 5,
            poster: 'https://i.pinimg.com/736x/2a/b3/d8/2ab3d8987b940357890b9f34ae93d080.jpg',
            Name: 'Spider man',
        },
       
        {
            id: 6,
            poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/217/1640217-v-99dd2cb43cd4',
            
        },
    ]
    return (
        <div className='h-[70%] w-full px-20 py-5 gap-x-5 grid  grid-cols-3 gap-5 bg-slate-600'>
            {Data .slice(0,6).map((Value) =>
                <div className=' h-96 w-96 border-2 border-black text-black rounded relative'>
               {/* <h1 className='text-white text-2xl bottom-10 font-bold rounded absolute pl-4 h-[2.3rem] w-[10rem] bg-red-400 left-[7rem] hover:bg-stone-600'>{ Value.Name }</h1> */}
               <img className='h-full w-full object-cover' src={Value.poster}/>
               
               
               </div>
            )};
        </div>
    )
}

export default Movies