import React from 'react';

function Header(){
    return (
        <header className = "Header">
        <h2>Weather Header</h2>
        <div className = "citiesNav">
            <a href = "/?city=Paris">Paris</a>
            <a href = "/?city=Los Angeles">Los Angeles</a>
            <a href = "/?city=New York">New York</a>
            <a href = "/?city=Yaounde">Yaounde</a>
        </div>
        </header>
    )
}

export default Header;