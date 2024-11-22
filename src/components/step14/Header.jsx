import React, { useContext } from 'react';
import { ThemContext } from '../../context/ThemContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Header() {
    const { isDark } = useContext(ThemContext)
    const user = useContext(UserInfoContext);
    return (
        <header
            className='header'
            style={{
              backgroundColor: isDark ? 'black' : 'lightgray',
              color: isDark ? 'white' : 'black'
            }}
        >
            <h1>WelCome {user}</h1>
        </header>
    );
}

export default Header;