import React from 'react';
import '../css/catalog.css';
import Card from './Card.js';

/** 
 *  Displays the catalog of items available to the user to purchase
**/ 
function Catalog ( props ) {
    
    let cards = [];
    
    // Populate the catalog with items displayed as cards
    for ( let i = 0; i < props.merchandise.length; i++ ) {
        cards.push (
            <Card
                id={ props.merchandise[ i ].id }
                userPoints={ props.points }
                name={ props.merchandise[ i ].name }
                price={ props.merchandise[ i ].price }
                isPurchased={ props.merchandise[ i ].isPurchased }
                onPurchase={ ( id ) => props.onPurchase ( id ) }
            />
        );
    }
    
    return (
        <div id='catalog'>
            { cards }
        </div>
    );
    
}

export default Catalog;