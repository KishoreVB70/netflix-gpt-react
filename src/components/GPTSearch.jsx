import React, { useRef } from 'react'
import { lang } from '../utils/lang';
import { useSelector, useDispatch } from 'react-redux';
import OpenAI from "openai";
import { tmdbMovieSearchAPI, tmdbOptions } from '../utils/constants';
import { addGptMovies } from '../redux/movies';


const GPTSearch = () => {
    const GPTSearchInput = useRef(null);
    const language = useSelector(s => s.config.lang);
    const REACT_APP_OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;
    const dispatch = useDispatch();

    const openai = new OpenAI({apiKey: REACT_APP_OPEN_AI_API_KEY,
          dangerouslyAllowBrowser: true        });

    const handleGPTSearch = async() => {
        const searchInput = GPTSearchInput.current.value 
        try {
            const gptResponse = await openai.chat.completions.create({
                messages: [{ role: "user", content: `For the query, provide 5 apt movie recommendation in comma separated format such as 'premam,theri,sura,puli,kathi' the query is:'${searchInput}'` }],
                model: "gpt-3.5-turbo",
            });

            const gptMovieRecommendations = (gptResponse.choices[0].message.content.split(",")).map(i => i.trim());
            console.log(gptMovieRecommendations);

            // Call the tmdb api
            const promiseArray = gptMovieRecommendations.map(i => fetch(tmdbMovieSearchAPI+i, tmdbOptions));
            const responses = await Promise.all(promiseArray);
            const jsonPromises = responses.map(i => i.json());
            const data = await Promise.all(jsonPromises);

            // Data is an array and each element contains another array
            
            // Obtain only the results
            const movieResults = data.map(i => i.results);
            const onlyExactName = movieResults.map((i, ind) => i.filter(j => j.title.toUpperCase() === gptMovieRecommendations[ind].toUpperCase()));
            const onlyOneMovie = onlyExactName.map(i => i.slice(0,1));
            const oneDArray = onlyOneMovie.map(i => i[0]);
            
            // console.log(movieResults);
            // console.log(onlyExactName);
            // console.log(onlyOneMovie);
            // console.log(oneDArray);
            
            // Remove undefined
            const finalArray = oneDArray.filter(i => i?.poster_path);
            console.log(finalArray);

            dispatch(addGptMovies(finalArray));

        }catch(error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-black w-1/2 h-[12%] flex flex-row items-center justify-center'>
            <input ref={GPTSearchInput} className='text-xl h-full w-11/12 p-2 pl-4 border border-black' placeholder={lang[language].searchPlaceHolder} type="text" />
            <button onClick={handleGPTSearch} className='bg-red-600 w-1/4 h-full border-y border-r text-white border-black text-xl' > {lang[language].search} </button>
        </div>
    )
}

export default GPTSearch