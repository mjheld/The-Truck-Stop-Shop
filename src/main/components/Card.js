import React from 'react';
import '../css/card.css';
import itemImage from '../assets/item_image.png';

/** 
 *  Displays information about items in the catalog
**/ 
function Card ( props ) {
    
    return (
        <div id='card'>
            <div id='cardPicture'>
                <img src={ itemImage } alt='Catalog Item' />
            </div>
            <p id='cardName'>{ props.name }</p>
            <p id='cardPrice'>{ props.price } points</p>
            
            {
                ( !props.isPurchased && props.userPoints >= props.price ) &&
                    <button
                        id='cardBtnPurchase'
                        onClick={ () => props.onPurchase ( props.id ) }>
                        
                        Purchase Item
                    </button>
            }
            {
                ( !props.isPurchased && props.userPoints < props.price ) &&
                    <button
                        id='cardBtnNotEnoughPoints'>
                        
                        Not Enough Points
                    </button>
            }
            {
                ( props.isPurchased ) &&
                    <button
                        id='cardBtnPurchased'>
                        
                        Item Purchased
                    </button>
            }
        </div>
    );
    
}

export default Card;