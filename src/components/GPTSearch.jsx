import React, { useRef } from 'react'

const GPTSearch = () => {
    const GPTSearchInput = useRef(null);
    const handleGPTSearch = () => {
        const searchInput = GPTSearchInput.current.value
    }

    return (
        <div className='bg-black w-1/2 h-[7%] flex flex-row items-center justify-center'>
            <input ref={GPTSearchInput} className='text-xl h-full w-3/4 p-2 pl-4 border border-black' placeholder='What do you feel like watching' type="text" />
            <button onClick={handleGPTSearch} className='bg-red-600 w-1/4 h-full border border-black' > Search </button>
        </div>  
    )
}

export default GPTSearch