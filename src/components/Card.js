import React from 'react';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import '../styling/Card.css';

const Card = ({ data }) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <div style={{ flex: 1 }}>
                    <p>{data.priceRange}</p>
                </div>
                <div className='card-name-section'>
                    <h4>{data.name}</h4>
                </div>
                <div className='card-rating-section'>
                    <div className='card-rating-container'>
                        <p className='card-rating-text'>{data.rating}</p>
                    </div>
                    <IconButton aria-label="delete" disabled color="primary">
                        <StarBorderIcon />
                    </IconButton>
                </div>
            </div>
            <div className='card-list-container'>
                {/* {data.items.map((item, index) => (
                    <div className='card-list'>
                        <div key={index} className="card-list-item">
                            <p>{item.itemName}</p>
                            <img src={item.itemSrc} />
                            <p>{item.itemPrice}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default Card;