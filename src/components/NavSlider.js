import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const NavSlider = ({ data, isClosed }) => {

    const [value, setValue] = useState([1, 4]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1 }}>
                <p1>{data.title}</p1>
            </div>
            {isClosed ?
                <div /> :
                <div style={{ flex: 3 }}>
                    <Box sx={{ marginInline:'10%' }}>
                        <Slider
                            value={value}
                            onChange={handleChange}
                            min={1}
                            max={4}
                            marks={data.marks}
                            sx={{
                                '.MuiSlider-markLabel': {
                                    fontSize: '0.8vw'
                                },
                                '.MuiSlider-thumb': {
                                    width: '1vw',  
                                    height: '1vw'
                                },
                            }}
                        />
                    </Box>
                </div>
            }
        </div>
    )
}

export default NavSlider;