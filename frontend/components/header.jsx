import React from 'react';


const Header = () => {
    return(
        <div className="header-wrapper">
            <div className='header'>  
                    <img src={logo} />
            </div>
            <div className='header'>
                <h1>TOP 100 WINES</h1>
                <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
            </div>
        </div>
    
    )
}

export default Header;