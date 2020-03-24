import React from 'react';

function NavigationItem(props) {
    return (
      <li>
        <a href={`#${props.itemName}`}>
          {props.itemName.toUpperCase()}
        </a>
      </li>
    );
  }
  
  function NavigationBar(props) {
    return (
      <nav id="site-nav" role="navigation">
        <ul>
          {props.categories.map((value, index) => {
            return <NavigationItem key={index} itemName={value}/>
          })}
        </ul>
      </nav>
    );
  }

export default NavigationBar;