import React, { useRef } from 'react'
import { lang } from '../utils/lang';
import { useSelector } from 'react-redux';

const GPTSearch = () => {
    const GPTSearchInput = useRef(null);
    const language = useSelector(s => s.config.lang);
    const handleGPTSearch = () => {
        const searchInput = GPTSearchInput.current.value
    }

    return (
        <div className='bg-black w-1/2 h-[7%] flex flex-row items-center justify-center'>
            <input ref={GPTSearchInput} className='text-xl h-full w-3/4 p-2 pl-4 border border-black' placeholder={lang[language].searchPlaceHolder} type="text" />
            <button onClick={handleGPTSearch} className='bg-red-600 w-1/4 h-full border-y border-r text-white border-black text-xl' > {lang[language].search} </button>
        </div>  
    )
}

export default GPTSearch