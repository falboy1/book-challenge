import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const StarRating = (props) => {
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    defaultValue={3}
                    precision={0.5}
                    readOnly={props.readOnly}
                    value={props.value}
                    size={props.size}
                    onChange={props.onChange}
                />
            </Box>
        </div>
    );
}

export default StarRating;
