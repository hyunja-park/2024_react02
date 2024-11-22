import React, { useContext } from 'react';
import { ThemContext } from '../../context/ThemContext';

function Footer() {
    const { isDark, setIsDark } = useContext(ThemContext)
    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <footer 
            className='footer'
            style={{
              backgroundColor: isDark ? 'black' : 'lightgray',
              color: isDark ? 'white' : 'black'
            }}
        >
          <button className='butten' onClick={toggleTheme}>Dark Mode</button>
        </footer>
    );
}

export default Footer;