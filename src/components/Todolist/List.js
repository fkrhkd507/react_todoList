import React from 'react';

function List({element}){
    
    return(
        <li id={element.key}>{element.text}</li>
    );
}


export default List;