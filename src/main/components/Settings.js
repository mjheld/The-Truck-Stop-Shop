import React, { useState } from 'react';
import '../css/settings.css';

/** 
 *  Displays the settings available to the user
**/ 
function Settings ( props ) {
    
    const [ input, updateInput ] = useState ( '' );
    
    return (
        <div>
            <p id='settingsTitle'>Settings</p>
            <hr />
            <br />
            
            <form>
                <label for="changeUsername">Change Username: </label>
                <input id="changeUsername" onChange={ ( e ) => updateInput ( e.target.value ) }/>
                <br /><br />
            </form>
            
            <button
                onClick={ () => props.onSubmit ( input ) }>Submit
            </button>
        </div>
    );
    
}

export default Settings;