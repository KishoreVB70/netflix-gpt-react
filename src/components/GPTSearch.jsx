import React, { useRef } from 'react'
import { lang } from '../utils/lang';
import { useSelector } from 'react-redux';
// import OpenAI from "openai";

const GPTSearch = () => {
    const GPTSearchInput = useRef(null);
    const language = useSelector(s => s.config.lang);
    const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
    console.log(OPEN_AI_API_KEY);

    // const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});

    const handleGPTSearch = async() => {
        const searchInput = GPTSearchInput.current.value 
        console.log(searchInput)
        // const completion = await openai.chat.completions.create({
        //     messages: [{ role: "user", content: `you are a movie recommendation assistant. For the query, provide 5 apt movie recommendation in comma separated format such as 'premam,theri,sura,puli,kathi' the query is:'${searchInput}'` }],
        //     model: "gpt-3.5-turbo",
        // });
    
        // console.log(completion.choices[0]);
    }

    return (
        <div className='bg-black w-1/2 h-[7%] flex flex-row items-center justify-center'>
            <input ref={GPTSearchInput} className='text-xl h-full w-3/4 p-2 pl-4 border border-black' placeholder={lang[language].searchPlaceHolder} type="text" />
            <button onClick={handleGPTSearch} className='bg-red-600 w-1/4 h-full border-y border-r text-white border-black text-xl' > {lang[language].search} </button>
        </div>  
    )
}

export default GPTSearch