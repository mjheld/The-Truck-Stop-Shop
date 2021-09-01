import React from 'react';
import '../css/points.css';
import '../css/table.css';

/** 
 *  Displays the amount of points the user has as well as point history changes
**/ 
function Points ( props ) {
    
    let historyRows = [];
    
    // Populate the rows of the point history table
    for ( let i = 0; i < props.pointHistory.length; i++ ) {
        historyRows.unshift (
            <tr>
                <td>{ props.pointHistory[ i ].points }</td>
                <td>{ props.pointHistory[ i ].date }</td>
                <td>{ props.pointHistory[ i ].sponsor }</td>
                <td>{ props.pointHistory[ i ].reason }</td>
            </tr>
        );
    }
    
    return (
        <div id='points'>
            <div id='pointDisplay'>{ props.points }</div>
            <div id='pointHistory'>
                <table class='table'>
                    <tr>
                        <th>Points</th>
                        <th>Date</th>
                        <th>Sponsor</th>
                        <th>Reason</th>
                    </tr>
                    
                    { historyRows }
                    
                </table>
            </div>
        </div>
    );
    
}

export default Points;