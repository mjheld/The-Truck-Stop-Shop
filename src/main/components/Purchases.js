import React from 'react';
import '../css/purchases.css';
import '../css/table.css';

/** 
 *  Displays the user's purchase history
**/ 
function Purchases ( props ) {
    
    let historyRows = [];
    
    // Populate the rows of the purchase history table
    for ( let i = 0; i < props.purchaseHistory.length; i++ ) {
        historyRows.unshift (
            <tr>
                <td>{ props.purchaseHistory[ i ].name }</td>
                <td>{ props.purchaseHistory[ i ].datePurchased }</td>
                <td>{ props.purchaseHistory[ i ].price }</td>
                <td>{ props.purchaseHistory[ i ].status }</td>
            </tr>
        );
    }
    
    return (
        <div id='purchases'>
            <table class='table'>
                <tr>
                    <th>Item Name</th>
                    <th>Date Purchased</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                
                { historyRows }
                
            </table>
        </div>
    );
    
}

export default Purchases;