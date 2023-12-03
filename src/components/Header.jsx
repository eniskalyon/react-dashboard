import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
const Header = ({ category, title }) => {
  const { currentMode } = useStateContext();


  return (
    <div className='mb-10 '>
 <p className={`text-${currentMode === 'Dark' ? 'white' : 'gray-400'}`}>
        {category}
      </p>
      <p className={`text-3xl font-extrabold tracking-tight text-${currentMode === 'Dark' ? 'white' : 'slate-900'}`}>
      {title}</p>
    </div>
  )
}

export default Header