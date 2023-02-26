import React, { useState } from 'react';
import useDarkSide from '../../hook/useDarkSide';

function ToggleColorTheme() {
    const {colorTheme, setTheme} = useDarkSide();
    const [darkSide, setDarkSide] = useState(
      colorTheme === "light" ? true : false
    );
  
    const toggleDarkMode = (checked:boolean) => {
      setTheme(colorTheme);
      setDarkSide(checked);
    };

    return (
        <>
            {darkSide ? 
                <div 
                    className='rounded-full px-2 h-11 dark_blue-linear-bg flex justify-center items-center cursor-pointer text-white'
                    onClick={() => toggleDarkMode(false)}
                >
                    <img src='/img/moon.png' alt='' className='h-8' />
                    <p className='text-xs font-medium leading-4 px-2'>DARK<br/>MODE</p>
                </div>
            : 
                <div 
                    className='rounded-full px-2 h-11 orange-linear-bg flex justify-center items-center cursor-pointer text-white'
                    onClick={() => toggleDarkMode(true)}
                >
                    <p className='text-xs font-medium leading-4 px-2'>LIGHT<br/>MODE</p>
                    <img src='/img/sun.png' alt='' className='h-8' />
                </div>
            }
        </>
    );
}

export default ToggleColorTheme;