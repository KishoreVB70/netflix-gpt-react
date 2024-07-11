import React from 'react'
import Header from './Header'
import Body from './Body'
import { useSelector } from 'react-redux'
import GPTPage from './GPTPage'

const Browse = () => {
    const gptPageToggle = useSelector(s => s.pageToggle);
    return (
        <div>
            <Header /> 
            {gptPageToggle
                ?<GPTPage />
                :<Body />
            }
        </div>
    )
}

export default Browse