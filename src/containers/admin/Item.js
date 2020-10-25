import React from 'react';

import { BASE_URL } from '../../store/actions/ActionTypes';


const Item = ({ id, image, itemCategory, index, removeFunc }) => (
    <main id='item-container'>
        <span key={id} id='images'>
            {image
                ? 
                <>
                <a href={BASE_URL + image} rel="noopener noreferrer" target="_blank"><img alt={image} src={BASE_URL + image} /></a>
                <button onClick={() => removeFunc({ id, itemCategory, index })}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
                </>
                : null
            }
        </span>
    </main>
)

export default Item;