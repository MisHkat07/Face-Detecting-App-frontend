import React from 'react';
import Tilt from 'react-tilt';
import Icon from './Icon2.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt3'>
          <Tilt className="Tilt br2 shadow-2 pa1"
              options={{ max: 55 }}
              style={{ height: 110, width: 110 }} >
              <div className="Tilt-inner">
                  <img alt='Logo' src={Icon}/>
              </div>
        </Tilt>

    </div>
  );
};

export default Logo;