import React from 'react';
import '../css/window.css';

/** 
 *  A container to display other components in the center of the screen
**/ 
function Window ( props ) {
    
    return (
        <div id='windowContainer'>
            <div id='windowBackground' onClick={ () => props.onClose () }></div>
            <div id='window'>
                <div id='windowHead'>
                    <p id='windowClose' onClick={ () => props.onClose () }>X</p>
                </div>
                <div id='windowContent'>{ props.content }</div>
            </div>
        </div>
    );
    
}

export default Window;