import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Button from '@mui/material/Button';
import { Checkbox, Box, FormGroup, FormControlLabel } from '@mui/material';
import FilterWheel from '../components/FilterWheel';
import FlatList from 'flatlist-react';
import Card from '../components/Card';
import NavSlider from '../components/NavSlider';
import '../styling/Home.css';
import logo from '../images/placeholder.png';
import Header from '../components/Header';

const Home = () => {
    const [isClosed, SetOpenState] = useState(true);

    const SIDENAVDATA = [
        {
            title: 'Price',
            marks: [
                {
                    value: 1,
                    label: '$',
                },
                {
                    value: 2,
                    label: '$$',
                },
                {
                    value: 3,
                    label: '$$$',
                },
                {
                    value: 4,
                    label: '$$$$',
                },
            ]
        },
        {
            title: 'Rating',
            marks: [
                {
                    value: 1,
                    label: '★',
                },
                {
                    value: 2,
                    label: '★★',
                },
                {
                    value: 3,
                    label: '★★★',
                },
                {
                    value: 4,
                    label: '★★★★',
                },
            ]
        },
    ];

    const places = [
        {
            name: 'Restaurant 1',
            priceRange: '$$',
            rating: 3.5,
            closeTime: '8pm',
            items: [
                {
                    itemName: 'Item1',
                    itemSrc: logo,
                    itemPrice: 10.99
                }

            ]
        },
        {
            name: 'Restaurant 2',
            priceRange: '$$',
            rating: 3.5,
            closeTime: '8pm',
            items: [
                {
                    itemName: 'Item1',
                    itemSrc: logo,
                    itemPrice: 10.99
                },
                {
                    itemName: 'Item2',
                    itemSrc: logo,
                    itemPrice: 10.99
                },
                {
                    itemName: 'Item3',
                    itemSrc: logo,
                    itemPrice: 10.99
                },

            ]
        },
    ]

    const renderItem = (person, idx) => {
        return (
            <Card data={person} />
        );
    }

    return (
        <div>
            <Header/>
            <div className='main'>
                <div className='side-nav-container'>
                    <Sidebar
                        collapsed={isClosed}
                        collapsedWidth="6rem"
                        width='20rem'
                        backgroundColor='#D9D9D9'
                        rootStyles={{ height: '100vh', flex: 1 }}>
                        <div className='side-nav-button'>
                            <Button
                                onClick={() => SetOpenState(!isClosed)}>
                                {isClosed ? <p1>Open</p1> : <p1>Close</p1>}
                            </Button>
                        </div>
                        <Menu rootStyles={{textAlign:'center'}}>
                            <h1>Sort</h1>
                            {SIDENAVDATA.map((item) => {
                                return <MenuItem>
                                    <NavSlider data={item} isClosed={isClosed} />
                                </MenuItem>
                            })}
                            <MenuItem rootStyles={{ marginTop: '25%' }}>
                                {
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <div style={{ flex: 1 }}>
                                            <p1>Dietary</p1>
                                        </div>
                                        {isClosed ?
                                            <div /> :
                                            <div style={{ flex: 3 }}>
                                                <Box sx={{ width: '90%' }}>
                                                    <FormGroup>
                                                        <FormControlLabel control={<Checkbox />} label="Vegetarian " />
                                                        <FormControlLabel control={<Checkbox />} label="Vegan" />
                                                        <FormControlLabel control={<Checkbox />} label="Gluten Free" />
                                                        <FormControlLabel control={<Checkbox />} label="Halal" />
                                                    </FormGroup>
                                                </Box>
                                            </div>
                                        }
                                    </div>
                                }
                            </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
                <div className='result-section'>
                    <h2>All Restaurants</h2>
                    <div className='tag-container'>
                        <div style={{ width: '60%' }}>
                            <hr />
                            <FilterWheel />
                            <hr />
                        </div>
                        <FlatList
                            list={places}
                            renderItem={renderItem}
                            renderWhenEmpty={() => <div>List is empty!</div>}
                        />
                    </div>
                </div>
                <div style={{ flex: 2, backgroundColor: 'darkgray' }}>
                    <img src={logo} style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div >
    )
}

export default Home;
