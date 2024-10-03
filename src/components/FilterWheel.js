import React from 'react'
import logo from '../images/placeholder.png';
import '../styling/FilterWheel.css';

const DATA = [
    {
        tag: 'Dine in',
        src: logo
    },
    {
        tag: 'Fast Food',
        src: logo
    },
    {
        tag: 'Local',
        src: logo
    },
    {
        tag: 'Pizza',
        src: logo
    },
    {
        tag: 'Burgers',
        src: logo
    },
    {
        tag: 'Mexican',
        src: logo
    },
    {
        tag: 'holder1',
        src: logo
    },
    {
        tag: 'holder2',
        src: logo
    },
];

const FilterWheel = () => {
    return (
        <div className="list">
            {DATA.map((item, index) => (
                <div key={index} className="list-item">
                    <img src={item.src} />
                    <p>{item.tag}</p>
                </div>
            ))}
        </div>
    )
}

export default FilterWheel;