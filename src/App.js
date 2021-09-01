import React, { useState } from 'react';
import './main/css/app.css';
import NavBtn from './main/components/NavBtn.js';
import Points from './main/components/Points.js';
import Catalog from './main/components/Catalog.js';
import Purchases from './main/components/Purchases.js';
import Window from './main/components/Window.js';
import Settings from './main/components/Settings.js';

/** 
 *  The main page of the application
**/ 
function App ( props ) {
    
    // Temporary way to test components with data
    const [ testDatabase, updateDatabase ] = useState ( {
        username        : 'John Smith',
        points          : 1250,
        pointHistory    : [
            { points : '+500', date : '8/20/2021', sponsor : 'Tom', reason : 'Following traffic signals' },
            { points : '-250', date : '8/22/2021', sponsor : 'Rob', reason : 'Bad behavior' },
            { points : '+500', date : '8/25/2021', sponsor : 'Steve', reason : 'Following the speed limit' },
            { points : '+800', date : '8/30/2021', sponsor : 'Rob', reason : 'Good behavior' },
            { points : '-300', date : '8/30/2021', sponsor : '---', reason : 'You purchased a(n) Frisbee' }
        ],
        purchaseHistory : [
            { name : 'Frisbee', datePurchased : '8/30/2021', price : '300 points', status : 'Shipped' }
        ],
        merchandise     : [
            { id : 0, name : 'T-Shirt', price : 500, isPurchased : false },
            { id : 1, name : 'Ball', price : 250, isPurchased : false },
            { id : 2, name : 'Piggy Bank', price : 100, isPurchased : false },
            { id : 3, name : 'Frisbee', price : 300, isPurchased : true },
            { id : 4, name : 'Jacks', price : 50, isPurchased : false },
            { id : 5, name : 'Purse', price : 175, isPurchased : false },
            { id : 6, name : 'Airplane', price : 100, isPurchased : false },
            { id : 7, name : 'Train', price : 200, isPurchased : false },
            { id : 8, name : 'Action Figure', price : 500, isPurchased : false },
            { id : 9, name : 'Doll', price : 350, isPurchased : false },
            { id : 10, name : 'Sticker', price : 25, isPurchased : false },
            { id : 11, name : 'Backpack', price : 750, isPurchased : false }
        ]
    } );
    
    const content = { POINTS : 'POINTS', CATALOG : 'CATALOG', PURCHASES : 'PURCHASES' };
    
    const [ activeContent, setActiveContent ]    = useState ( content.POINTS );
    const [ areSettingsOpen, setIfSettingsOpen ] = useState ( false );
    
    /** 
     *  Changes the user's name
     *
     *  @param { string } newUsername - The user's new name
    **/ 
    function changeUsername ( newUsername ) {
        if ( newUsername !== '' ) {
            let temp = { ...testDatabase };
            
            temp.username = newUsername;
            
            updateDatabase ( temp );
        }
    }
    
    /** 
     *  Updates information related to making a purchase - such as
     *  point total, point history, and purchase history
     *  
     *  @param { string } key - The key used to identify an item in the catalog
    **/ 
    function purchaseItem ( key ) {
        let temp = { ...testDatabase };
        let item = temp.merchandise.find ( ( { id } ) => id === key );
        
        temp.points -= item.price;
        item.isPurchased = true;
        
        let date          = new Date ();
        let formattedDate = ( date.getMonth () + 1) + '/' +
                            date.getDate () + '/' +
                            date.getFullYear ();
        
        temp.pointHistory.push ( {
            points  : '-' + item.price,
            date    : formattedDate,
            sponsor : '---',
            reason  : 'You purchased a(n) ' + item.name
        } );
        
        temp.purchaseHistory.push ( {
            name          : item.name,
            datePurchased : formattedDate,
            price         : item.price + ' points',
            status        : 'Processing'
        } );
        
        updateDatabase ( temp );
    }
    
    return (
        <div id='app'>
            <div id='appHead'>
                <div
                    id='headTitle'
                    onClick={ () => setActiveContent ( content.POINTS ) }>
                    
                    The Truck Stop Shop
                </div>
                <div
                    id='headSettings'
                    onClick={ () => setIfSettingsOpen ( true ) }>
                    
                    { testDatabase.username }
                </div>
            </div>
            
            <div id='appNav'>
                <NavBtn
                    text='Points'
                    isActive={ activeContent === content.POINTS }
                    onSelect={ () => setActiveContent ( content.POINTS ) }
                />
                <NavBtn
                    text='Catalog'
                    isActive={ activeContent === content.CATALOG }
                    onSelect={ () => setActiveContent ( content.CATALOG ) }
                />
                <NavBtn
                    text='Purchases'
                    isActive={ activeContent === content.PURCHASES }
                    onSelect={ () => setActiveContent ( content.PURCHASES ) }
                />
            </div>
            
            <div id='appContent'>
                {
                    ( activeContent === content.POINTS ) &&
                        <Points
                            points={ testDatabase.points }
                            pointHistory={ testDatabase.pointHistory }
                        />
                }
                {
                    ( activeContent === content.CATALOG ) &&
                        <Catalog
                            points={ testDatabase.points }
                            merchandise={ testDatabase.merchandise }
                            onPurchase={ ( id ) => purchaseItem ( id ) }
                        />
                }
                {
                    ( activeContent === content.PURCHASES ) &&
                        <Purchases
                            purchaseHistory={ testDatabase.purchaseHistory }
                        />
                }
            </div>
            
            {
                ( areSettingsOpen ) &&
                    <Window
                        content={ <Settings onSubmit={ ( username ) => changeUsername ( username ) }/> }
                        onClose={ () => setIfSettingsOpen ( false ) }
                    />
            }
        </div>
    );
    
}

export default App;