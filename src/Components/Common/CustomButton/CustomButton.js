import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ variant = "contained", color = "primary", title, onClick }) => {
    return (
        <Button
        color={color}
        variant={variant}
        onClick={onClick}
        >
            {title}
        </Button>
    );
}

export default CustomButton;