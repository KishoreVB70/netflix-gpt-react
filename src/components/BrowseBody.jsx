import React from 'react'
import Body from './Body'
import GPTPage from './GPTPage'
import { useSelector } from 'react-redux'


const BrowseBody = () => {
  const gptPageToggle = useSelector(s => s.pageToggle.isGptPage);

  return (
    <div>
        {gptPageToggle
            ?<GPTPage />
            :<Body />
        }

    </div>
  )
}

export default BrowseBody