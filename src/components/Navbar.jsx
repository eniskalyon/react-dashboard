import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
      
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

 
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentToggle = (componentName) => {
    setActiveComponent(prev => prev === componentName ? null : componentName);
  };
  

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />}/>
   
    <div className='flex'>
   <NavButton
    title='Cart'
    customFunc={() => handleComponentToggle('cart')}
    color={currentColor}
    icon={<FiShoppingCart />}
    
    />

<NavButton
    title='Chat'
    dotColor='#03C9D7'
    customFunc={() => handleComponentToggle('chat')}
    color={currentColor}
    icon={<BsChatLeft />}/>

<NavButton
    title='Notifications'
    dotColor='#03C9D7'
    customFunc={() => handleComponentToggle('notification')}
    color={currentColor}
    icon={<RiNotification3Line />}/>

    <TooltipComponent
    content='Profile'
    position='BottomCenter'
   

    >
      <div
      className='flex items-center gap-2cursor-pointer p-1 hover:bg-light-gray rounded-lg'
      onClick={() => handleComponentToggle('userProfile')}
      >
        <img
        src={avatar}
        className='rounded-full w-8 h-8 '
        />
        <p>
          <span className='text-gray-400 text-14'>Hi, </span> {' '}
          <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
        </p>
        <MdKeyboardArrowDown className='text-gray-400 text-14'/>
      </div>
    </TooltipComponent>

    {activeComponent === 'cart' && <Cart onClose={() => setActiveComponent(null)} />}
    {activeComponent === 'chat' && <Chat onClose={() => setActiveComponent(null)} />}
    {activeComponent === 'notification' && <Notification onClose={() => setActiveComponent(null)} />}
    {activeComponent === 'userProfile' && <UserProfile onClose={() => setActiveComponent(null)} />}

    </div>
    </div>
  )
}

export default Navbar