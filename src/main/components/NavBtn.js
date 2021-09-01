import React, { useState } from 'react';
import '../css/navBtn.css';

/** 
 *  A button that the user uses to navigate the website
**/ 
function NavBtn ( props ) {
    
    const [ barStyle, setBarStyle ] = useState ( 'barInactive' );
    
    return (
        <div
            id='navBtn'
            onMouseEnter={ () => setBarStyle ( 'barHover' ) }
            onMouseLeave={ () => setBarStyle ( 'barInactive' ) }
            onClick={ props.onSelect }>
            
            <div id='navBtnText'>{ props.text }</div>
            <div id={ ( props.isActive ) ? 'barActive' : barStyle }></div>
        </div>
    );
    
}

export default NavBtn;