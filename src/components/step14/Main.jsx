import React, { useContext } from 'react';
import { ThemContext } from '../../context/ThemContext';
import { UserInfoContext } from '../../context/UserInfoContext';

function Main() {
    const { isDark } = useContext(ThemContext)
    const user = useContext(UserInfoContext);
    return (
      <div 
          className='content'
          style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
          }}
      >
        <p>{user}님, 좋은 하루 되세요.</p>
      </div>
    );
}

export default Main;